import "./index.css";
import { useEffect, useState, useRef, useMemo, useContext } from "react";
import io from "socket.io-client";
import { useParams, useNavigate } from "react-router-dom";
import L, { LatLng } from "leaflet";
import { Card } from "../Styled";
// import {socket} from "../../socket"
import axios from "axios";
import "leaflet/dist/leaflet.css";
import throttle from "lodash/throttle";
import iconDrop from "./marker-icon-2x.svg";
import { TokenContext, ColorPallete } from "../../context";
import Loader from "../Loading";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });
const mapContainerStyle = {
  width: "90vw",
  height: "60vh",
};
const THROTTLE_DELAY = 50;
// function ManagerLive() {
//     let token = useContext(TokenContext);
//     const [trip, setTrip] = useState(null);
//     const [isLoading, setLoading] = useState(true);
//     const [bookInfo, setBookInfo] = useState({});
//     const [initialValues, setInitialValues]= useState({
//         zoom: 15,
//         center:[34.434310, 35.835937],
//         scrollWheelZoom: true,
//       });
//     const tripId = useParams();
//     useEffect(()=>{
//         getTrip();
//         const SOCKET=process.env.REACT_APP_BASE_SOCKET;
//     // const SOCKET = "http://192.168.120.18:5000/";
//     let socket = io(SOCKET);
//     socket.on("tripWatching", (args) => {
//       let batata = { ...args };
//       console.log("batataaaaaa", batata);
//       if (batata) {
//         if (batata.documentKey._id === tripId.tripId) {
//           const arg = batata["updateDescription"]["updatedFields"];
//           delete arg.scheduleId;
//           console.log(arg);
//           let cc = { ...trip, ...arg };
//           console.log("bobo", cc);
//           setTrip(cc);
//         }
//       }
//     });
//     }, [])

//     const getTrip = async () => {

//         const URL = process.env.REACT_APP_BASE_URL;
//         try {
//           let id = tripId.tripId;
//           console.log("token", token.decoded);
//           axios
//             .get(`${URL}app/trip/trip/${id}`, {
//               headers: { Authorization: `Bearer ${token.token}` },
//             })
//             .then(
//               function (success) {
//                 if (success.status === 200 || success.status===304) {
//                   setTrip(success.data.data[0]);
//                   setLoading(false);
//                 }
//               },
//               function (reject) {}
//             );
//         } catch (error) {
//           console.log(error);
//         }
//       };

//     const DropLocationMarker = () => {
//         const markerIcon = L.icon({
//           iconUrl: iconDrop,
//           iconSize: [50, 40], // size of the icon
//           popupAnchor: [-3, -20], // point from which the popup should open relative to the iconAnchor
//         });
//         try {
//           const shipment = trip
//           const coordinates = shipment?.dropLocation?.coordinates;
//           return Array.isArray(coordinates) ? (
//             <Marker position={[coordinates[1], coordinates[0]]} icon={markerIcon}>
//               <Popup>Delivery location</Popup>
//             </Marker>
//           ) : null;
//         } catch (error) {
//           console.error(error);
//           return null;
//         }
//       };
//     return (         <MapContainer style={mapContainerStyle} {...initialValues}>
//       <Marker position={[34.434310, 35.835937]}>
//      batata helwe
//     </Marker>
//     <Marker position={[34.43433, 36.835900]}>
//      batata helwe
//     </Marker>
//         <TileLayer
//           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />

//       </MapContainer> );
// }

function ManagerLive() {
  let token = useContext(TokenContext);
  const [trip, setTrip] = useState([]);
  const [ballouta, setBallouta] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [bookInfo, setBookInfo] = useState({});
  const tripId = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   getTrip();
  //   const ss=io(process.env.REACT_APP_BASE_SOCKET)
  //   ss.on("testbatata", (args)=>{
  //     console.log(args)
  //   })
  //   ss.on("khara", (args)=>{
  //     console.log(args)
  //   })
  //   ss.emit('testbatata', "batataaaa");

    
  //   // setInterval(updateLocation, 10000);
  //   if(tripId.tripId!=="all"){
  //     // let socket = io(process.env.REACT_APP_BASE_SOCKET);
  //   socket.on("tripWatching", (args) => {
  //     // setTrip(args.fullDocument);
  //     console.log(args)

  //   });
  //   }
  // }, []);
  useEffect(() => {
    getTrip()
  //   const socket = io(process.env.REACT_APP_BASE_SOCKET); // Replace 'your-socketio-endpoint' with your actual Socket.IO server endpoint

  //   // Listen for the response event from the backend
  //   socket.on('tripwhatching', (responseData) => {
  //     console.log(responseData); // Update the component state with the received data
  //   });

  //   const sendRequest = () => {
  //     socket.emit('msghandler', "test 10")
  //     console.log("wth")
  //   };

  //  const ssss= setInterval( sendRequest, 3000); // Schedule the request every 10 seconds

  //  return () => {
  //   clearInterval(ssss)
  //   // Clean up the socket connection
  //   socket.disconnect();
  // };
  }, []);
  const getTrip = async () => {
    const URL = process.env.REACT_APP_BASE_URL;
    let id = tripId.tripId;
    if(id==="all"){
      try {
      
        console.log("token", token.decoded);
        axios
          .get(`${URL}app/trip/sched/upcoming`, {
            headers: { Authorization: `Bearer ${token.token}` },
          })
          .then(
            function (success) {
              if (success.status === 200 || success.status === 304) {
                let filtered=success.data.data.filter(e=> e.tripStatus==="departed")
                console.log("f", filtered, filtered.length)
                setTrip(filtered);
                setLoading(false);
              }
            },
            function (reject) {}
          );
      } catch (error) {
        console.log(error);
      }
    }
    else{
    try {
            axios
        .get(`${URL}app/trip/trip/${id}`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then(
          function (success) {
            if (success.status === 200 || success.status === 304) {
             if( success.data.data[0].busManagerId._id===token.decoded.userId && success.data.data[0].tripStatus==="departed")
             
             setTrip(success.data.data);
              setLoading(false);
            }
          },
          function (reject) {}
        );
       
    } catch (error) {
      console.log(error);
    }}
  };
  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {

      if (!isLoading) {
        if (
          trip[0].lat.$numberDecimal !== toString(position.coords.latitude) ||
          trip[0].lat.$numberDecimal !== toString(position.coords.latitude)
        ) {
          axios
            .put(`${process.env.REACT_APP_BASE_URL}app/trip/${tripId.tripId}`, {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
            .then(function (s) {
            });
        }
      }
    }, function(lolo){console.log(lolo)}, { enableHighAccuracy: true });
  };
  if(tripId.tripId==="all" && trip.length>0 ){return <div className="tripList w-11/12">
    <h1 className="pb-2 border-b-2 border-gray-300">Departing Trips</h1>
    {trip.map(e=> {
    let st=new Date(e.scheduleId.startTime)
          let et=new Date(e.scheduleId.endTime)
          let date=new Date(e.date)
    return <Card key={e._id} $departed onClick={()=> navigate(`/app/manager/trip/${e._id}`)}>
  {" "}
  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
  <div className="time"><p>{st.getHours()}:{st.getMinutes()}</p> <p>{et.getHours()}:{et.getMinutes()}</p></div>
  <div className="status">{e.tripStatus}</div>
  <p className="date">{date.getDate()}{"-"}{date.getMonth()+1}</p>
</Card>})}</div>}
 if(tripId.tripId==="all" && trip.length===0 ){return <div className="tripList w-11/12">
 <h1 className="pb-2 border-b-2 border-gray-300">Departing Trips</h1>
      <p>No trips</p>
</div>}
  else{return <>{!isLoading&& trip.length===0 && <p>No trip</p>}
  {!isLoading&&trip.length>0 && <p>yay</p>}
  {isLoading && <Loader />}</>;}
}
export default ManagerLive;
