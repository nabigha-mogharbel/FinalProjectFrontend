import { useEffect, useState, useRef, useMemo, useContext } from 'react';
import L, { LatLng } from 'leaflet';
import axios from "axios"
import 'leaflet/dist/leaflet.css';
import throttle from 'lodash/throttle';
import iconDrop from "./marker-icon-2x.svg"
import { TokenContext, ColorPallete } from "../../context";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents, Tooltip
} from 'react-leaflet';
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });
  const mapContainerStyle = {
    width: '90vw',
    height: '60vh',
  };
  const THROTTLE_DELAY = 50;
function PassengerLive() {
    let token = useContext(TokenContext);
    const [trip, setTrip] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [bookInfo, setBookInfo] = useState({});
    const [initialValues, setInitialValues]= useState({
        zoom: 12,
        center:[34.434310, 35.835937],
        scrollWheelZoom: true,
      });
    useEffect(()=>{
        getTrip();
     
    }, [])
   
    const getTrip = async () => {

        const URL = process.env.REACT_APP_BASE_URL;
        try {
          console.log("token", token.decoded);
          axios
            .get(`${URL}app/trip/sched/upcoming`, {
              headers: { Authorization: `Bearer ${token.token}` },
            })
            .then(
              function (success) {
                if (success.status === 200 || success.status===304) {
                  console.log(success.data.data)
                  let state=[]
                  success.data.data.map(e=>{
                    if(e.tripStatus==="departed"){
                      state.push(e)
                    }
                  })
                  console.log("ss", state.length)
                  setTrip(state)
                 // setTrip(success.data.data[0]);
                  setLoading(false);
                }
              },
              function (reject) {}
            );
        } catch (error) {
          console.log(error);
        }
      };


    return (        <>      
    {!isLoading&&trip.length===0 && <h1>No departed trips</h1>}
    <MapContainer style={mapContainerStyle} {...initialValues}>
    {!isLoading&&trip.length>0 && trip.map(e=> {return <Marker key={e._id} position={[e.lat.$numberDecimal, e.lon.$numberDecimal]}>
      <Tooltip>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</Tooltip>
    </Marker> })}

        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
     
      </MapContainer></> );
}

export default PassengerLive;