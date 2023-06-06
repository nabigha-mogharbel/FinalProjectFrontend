import { useEffect, useState, useRef, useMemo, useContext } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import L, { LatLng } from 'leaflet';
import axios from "axios"
import 'leaflet/dist/leaflet.css';
import throttle from 'lodash/throttle';
import iconDrop from "./marker-icon-2x.png"
import { TokenContext, ColorPallete } from "../../context";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
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
    const [trip, setTrip] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [bookInfo, setBookInfo] = useState({});
    const [initialValues, setInitialValues]= useState({
        zoom: 15,
        center:[34.434310, 35.835937],
        scrollWheelZoom: true,
      });
    const tripId = useParams();
    useEffect(()=>{
        getTrip();
        // const SOCKET=process.env.REACT_APP_BASE_SOCKET;
    // const SOCKET = "http://192.168.120.18:5000/";
    // let socket = io(SOCKET);
    // socket.on("tripWatching", (args) => {
    //   // let batata = { ...args };
    //   // console.log("batataaaaaa", batata);
    //   // if (batata) {
    //   //   if (batata.documentKey._id === tripId.tripId) {
    //   //     const arg = batata["updateDescription"]["updatedFields"];
    //   //     delete arg.scheduleId;
    //   //     console.log(arg);
    //   //     let cc = { ...trip, ...arg };
    //   //     console.log("bobo", cc);
    //   //     setTrip(cc);
    //   //   }
    //   // }
    //   setTrip(args.fullDocument);

    // });
    // return () => {
    //   // Clean up the socket connection
    //   socket.disconnect();
    // };
    }, [])
    const customIcon = new L.Icon({
      iconUrl: require('../../Images/icon.png'),
      iconSize: [25, 40], // Adjust the size of the icon
    });
    const getTrip = async () => {

        const URL = process.env.REACT_APP_BASE_URL;
        try {
          let id = tripId.tripId;
          axios
            .get(`${URL}app/trip/trip/${id}`, {
              headers: { Authorization: `Bearer ${token.token}` },
            })
            .then(
              function (success) {
                if (success.status === 200 || success.status===304) {
                  setTrip(success.data.data[0]);
                  setLoading(false);
                }
              },
              function (reject) {}
            );
        } catch (error) {
          console.log(error);
        }
      };

    return (         
      <> <h1>Check Live Trips
        </h1>   <MapContainer style={mapContainerStyle} {...initialValues}>
      <Marker icon={customIcon} position={[34.434310, 35.835937]}>
     
    </Marker>

        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
     
      </MapContainer></>
 );
}

export default PassengerLive;