import "./index.css";
import { useEffect, useState, useRef, useMemo, useContext } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import L, { LatLng } from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import throttle from "lodash/throttle";
import iconDrop from "./marker-icon-2x.svg";
import { TokenContext, ColorPallete } from "../../context";

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
  const [trip, setTrip] = useState(null);
  const [ballouta, setBallouta] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [bookInfo, setBookInfo] = useState({});
  const [initialValues, setInitialValues] = useState({
    zoom: 15,
    center: [34.43431, 35.835937],
    scrollWheelZoom: true,
  });
  const tripId = useParams();
  useEffect(() => {
    getTrip();
    setInterval(updateLocation, 10000);
  }, [ballouta]);

  const getTrip = async () => {
    const URL = process.env.REACT_APP_BASE_URL;
    try {
      let id = tripId.tripId;
      console.log("token", token.decoded);
      axios
        .get(`${URL}app/trip/trip/${id}`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then(
          function (success) {
            if (success.status === 200 || success.status === 304) {
              console.log(success.data.data[0], "ywowow");
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
  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      if (!isLoading) {
        if (
          trip.lat.numberDecimal !== toString(position.coords.latitude) ||
          trip.lat.numberDecimal !== toString(position.coords.latitude)
        ) {
          axios
            .put(`${process.env.REACT_APP_BASE_URL}app/trip/${tripId.tripId}`, {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
            .then(function (s) {
              setBallouta(new Date().toISOString());
            });
        }
      }
    }, function(lolo){console.log(lolo)}, { enableHighAccuracy: true });
  };

  return <>{tripId.tripId}</>;
}
export default ManagerLive;
