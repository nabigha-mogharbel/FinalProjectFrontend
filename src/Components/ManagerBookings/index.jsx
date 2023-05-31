import { Switch } from "@headlessui/react";
import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { Card, Button, Status } from "../Styled";
import Popup from "../Popup";
import Loader from "../Loading";
import { io } from "socket.io-client";
import map from "../../Images/map.webp";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import "./index.css";
import Swal from "sweetalert2";
import { TokenContext, ColorPallete } from "../../context";
function ManagerBookings() {
  let token = useContext(TokenContext);
  let color = useContext(ColorPallete);
  const [booked, setBook] = useState(false);
  const [trip, setTrip] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [bookInfo, setBookInfo] = useState({});
  const [bookingModal, setBookingModal] = useState(false);
  const [bookings, setBookings] = useState([]);
  const tripId = useParams();
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(false);
  const location = useLocation();
  const tripS = useRef();
  const busS = useRef();
  useEffect(() => {
    console.log("color");
    getBookings();
    console.log(tripS);
    const SOCKET = process.env.REACT_APP_BASE_SOCKET;
    // const SOCKET = "http://192.168.120.18:5000/";
    let socket = io(SOCKET);
    socket.on("tripWatching", (args) => {
      let batata = { ...args };
      console.log("batataaaaaa", batata);
      if (batata) {
        if (batata.documentKey._id === tripId.tripId) {
          const arg = batata["updateDescription"]["updatedFields"];
          delete arg.scheduleId;
          console.log(arg);
          let cc = { ...trip, ...arg };
          console.log("bobo", cc);
          setTrip(cc);
        }
      }
    });
  }, []);
  const getBookings = async () => {
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
              //   console.log("state", success.data.data);
              //   console.log("filtered",success.data.data[0].bookedPassengers.filter(e => e.passengerId===token.decoded.userId)[0].status)

              setBookings(success.data.data[0].bookedPassengers);
              setLoading(false);
            }
          },
          function (reject) {}
        );
    } catch (error) {
      console.log(error);
    }
  };
  const changeStatus=(e,id)=>{
    const URL = process.env.REACT_APP_BASE_URL;
try{
    axios.put(`${URL}app/trip/book/manager/${id}`, {
        headers: { Authorization: `Bearer ${token.token}` },
      })}catch(e){
        console.log(e)
      }
  }
  return (
    <div>
        <h1>Bookings</h1>
      {!isLoading && (
        <div className="flex justify-center gap-4">
          {bookings.map((book) => (
            <div key={book._id} className="flex justify-center gap-4">
                <span>{book.passengerId}:</span>
              <select value={book.status} onChange={(e)=>changeStatus(e,book._id)}>
                <option value="pending">Pending</option>
                <option value="approved">Approve</option>
                <option value="declined">Decline</option>
              </select>
            </div>
          ))}
        </div>
      )}

      {isLoading && <Loader />}
    </div>
  );
}

export default ManagerBookings;
