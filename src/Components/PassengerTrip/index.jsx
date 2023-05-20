import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Styled";
import Loader from "../Loading";
import { io } from "socket.io-client";
import { useNavigate, useLocation, useParams, Link} from "react-router-dom";
import "./index.css";
function PassengerTrip() {
  const [trip, setTrip] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const tripId = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    getTrip();
    let socket = io("http://localhost:5000/");
    socket.on("tripWatching", (args)=>{
      let batata={...args}
      console.log("batataaaaaa",batata)
      if(batata){
          if(batata.documentKey._id===tripId.tripId){  
          const arg=batata["updateDescription"]["updatedFields"]
          let cc={...trip, ...arg}
          console.log("bobo", cc)
          setTrip(cc)
        }
      }
    })
  }, []);
  const getTrip = async () => {
//     let socket = io("http://localhost:5000/");
//   socket.on("cc", (arg) => {
//     console.log(arg); // world
//   });
  //socket.emit("connection", "hiii");
    const URL = "http://localhost:8000/";
    try {
      axios.get(`${URL}app/trip/trip/${tripId.tripId}`).then(
        function (success) {
          if (success.status === 200) {
            console.log("state",success.data.data)
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
  // socket.on("cc", (arg) => {
  //   console.log(arg); // world
  // });
  // socket.emit("connection", "hii")
 
  return (
    <div className="tripList">
        <Link to="/app/passenger/">Back</Link>
      {!isLoading && trip !== null && (
        <div>
          <h1>
            {trip.scheduleId.startLocation}
            {" -> "}
            {trip.scheduleId.endLocation}
          </h1>
         {trip.tripStatus==="departed"&&<button>Go Live</button>}
        </div>
      )}
      {!isLoading && trip === null && <div>Faraghhhhhhghghghghghg</div>}
      {isLoading && <Loader />}
    </div>
  );
}

export default PassengerTrip;
