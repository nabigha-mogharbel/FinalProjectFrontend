import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { Card, Button, Status, TripTag } from "../Styled";
import { Switch } from "@headlessui/react";
import Popup from "../Popup";
import Loader from "../Loading";
import { io } from "socket.io-client";
// import {socket} from "../../socket"
import map from "../../Images/map.webp";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import "./index.css";
import Swal from "sweetalert2";
import { TokenContext, ColorPallete } from "../../context";
function PassengerTrip() {
  let token = useContext(TokenContext);
  let color = useContext(ColorPallete);
  const [trip, setTrip] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isform, showForm] = useState(false);
  const tripId = useParams();
  const timeS=useRef()
  const timeE=useRef()
  const empty=useRef()
  useEffect(() => {
    getTrip();
    // const SOCKET=process.env.REACT_APP_BASE_SOCKET;
    // // const SOCKET = "http://192.168.120.18:5000/";
    // let socket = io(SOCKET);
    // socket.on("tripWatching", (args) => {
    //   setTrip(args.fullDocument);
    // });
    // return () => {
    //   // Clean up the socket connection
    //   socket.disconnect();
    // };
    // const SOCKET = process.env.REACT_APP_BASE_SOCKET;
    // console.log(SOCKET)
    // let socket = io(SOCKET);
    // socket.on("tripWatching", (args) => {
    //   // let batata = { ...args };
    //   // if (batata) {
    //   //   if (batata.documentKey._id === tripId.tripId) {
    //   //     const arg = batata["updateDescription"]["updatedFields"];
    //   //     delete arg.scheduleId;
    //   //     console.log("sock sock");
    //   //     let cc = { ...trip, ...arg };
    //   //     console.log("bobo", cc);
    //   //     setTrip(cc);
    //   //   }
    //   // }
    //   setTrip(args.fullDocument);
    // });
    
    
  }, []);

  const getTrip = async () => {
    const URL = process.env.REACT_APP_BASE_URL;
    try {
      let id = tripId.tripId;
      console.log("tokedddn", token.decoded);
      axios
        .get(`${URL}app/trip/trip/${id}`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then(
          function (success) {
            if (success.status === 200 || success.status === 304) {
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

  const updateTripField = async (e, param) => {
    const URL = process.env.REACT_APP_BASE_URL;
    let req = {};
    req[param] = e.target.value;
    console.log("req", req);
    try {
      axios
        .put(`${URL}app/trip/${tripId.tripId}`, req, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then(
          function (success) {
            if (success.status === 200) {
              Swal.fire("Updated!", "success");
            }
          },
          function (reject) {}
        );
    } catch (error) {
      console.log(error);
    }
  };
  const updateTrip=async()=>{

  }
  return (
    <div className="tripList w-11/12">
      {!isLoading && trip !== null && (
        <>
          <div className="flex justify-start items-start gap-8 trip-header">
            <Button className="">
              <Link to="/app/manager/">
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L1.29289 4.29289L0.585786 5L1.29289 5.70711L2 5ZM14 6C14.5523 6 15 5.55228 15 5C15 4.44772 14.5523 4 14 4V6ZM5.29289 0.292893L1.29289 4.29289L2.70711 5.70711L6.70711 1.70711L5.29289 0.292893ZM1.29289 5.70711L5.29289 9.70711L6.70711 8.29289L2.70711 4.29289L1.29289 5.70711ZM2 6H14V4H2V6Z"
                    fill="#f7f7f7"
                  />
                </svg>
              </Link>
            </Button>
            <div className="flex gap-2">
              <h1 className="flex justify-between gap-2 p-0 m-0">
                {trip.scheduleId.startLocation} {trip.scheduleId.endLocation}
              </h1>
              <div className="flex flex-column justify-start gap-2">
                <State2 state={trip.tripStatus} text={trip.tripStatus} />{" "}
              </div>
            </div>
          </div><img src={map} alt="map" />
         {!isform&& <> 
          <div className="flex w-100 justify-between items-end">
          <span>Empty Seats: {" "+trip.emptySeats+" "}</span> <Button
            onClick={() => {
              showForm(true);
            }}
          >
            Update
          </Button></div>
          <div className="flex justify-between gap-4 mt-2 pb-2">
            <p>
              {" "}
              <span>Depart Time: </span>{" "}
              <span className="trial-time">
                {new Date(trip.startTime).getHours()}:
                {new Date(trip.startTime).getMinutes()}
              </span>
            </p>
            <p>
              {" "}
              <span>Arrival Time: </span>{" "}
              <span className="trial-time">
                {new Date(trip.endTime).getHours()}:
                {new Date(trip.endTime).getMinutes()}
              </span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-end gap-2 w-100">
          <div className="flex flex-row justify-start items-end gap-2">
          <p className="flex flex-row gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill={color["pending"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM10 3.5C10 2.94772 9.55229 2.5 9 2.5C8.44771 2.5 8 2.94772 8 3.5V8.75C8 9.44036 8.55964 10 9.25 10H12.5C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8H10V3.5Z"
                fill={color["pending"]}
              />
            </svg>
            {
              trip.bookedPassengers.filter((book) => {
                return book.status === "pending";
              }).length
            }
          </p>
          <p className="flex flex-row gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM3.58579 13L4.29289 12.2929L7.58579 9L4.29289 5.70711L3.58579 5L5 3.58579L5.70711 4.29289L9 7.58579L12.2929 4.29289L13 3.58579L14.4142 5L13.7071 5.70711L10.4142 9L13.7071 12.2929L14.4142 13L13 14.4142L12.2929 13.7071L9 10.4142L5.70711 13.7071L5 14.4142L3.58579 13Z"
                fill={color["declined"]}
              />
            </svg>
            {
              trip.bookedPassengers.filter((book) => {
                return book.status === "declined";
              }).length
            }
          </p>
          <p className="flex flex-row gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8.76822 12.6402L13.7682 6.64018L12.2318 5.35982L7.9328 10.5186L5.70711 8.29289L4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402Z"
                fill={color["approved"]}
              />
            </svg>
            {
              trip.bookedPassengers.filter((book) => {
                return book.status === "approved";
              }).length
            }
          </p>
          </div>
          <Button className="self-end">
            <Link to={`/app/manager/bookings/${tripId.tripId}`}>
              Manage
            </Link>
          </Button>
          </div>
          {/* {trip.tripStatus === "departed" && (
            <Button $yellow>
              <Link to={`/app/manager/live/${tripId.tripId}`}>Go Live</Link>
            </Button>
          )} */}
          </>}
          {isform&&(
        <>  <div className="flex justify-between w-100">
        <label>Trip Status</label><select
        value={trip.tripStatus}
        onChange={(e) => updateTripField(e, "tripStatus")}
      >
        <option value="departed">Departed</option>
        <option value="arrived">Arrived</option>
        <option value="onboarding">Onboarding</option>
        <option value="declined">Declined</option>
        <option value="scheduled">Scheduled</option>
      </select></div>
      <div className="flex justify-between w-100">
        <label>Bus Status</label>
      <select
        value={trip.busStatus}
        onChange={(e) => updateTripField(e, "busStatus")}
      >
        <option value="full">Full</option>
        <option value="delayed">Delayed</option>
        <option value="onboarding">Onboarding</option>
        <option value="good">Good</option>
      </select></div>
      <div className="flex justify-between w-100">
      <label htmlFor="start">Depart Time</label>
      <input type="datetime-local" id="start" defaultValue={new Date(trip.startTime)} ref={timeS} onChange={(e)=>{
        let today=new Date()
        today.setUTCHours=parseInt(timeS.current.value.split(":")[0])
        today.setUTCMinutes=parseInt(timeS.current.value.split(":")[1])
        console.log(timeS.current.value, new Date(timeS.current.value).toISOString())}}/></div>
        <div className="flex justify-between w-100">
        <label htmlFor="start">Arrive Time</label>
      <input type="datetime-local" id="start" defaultValue={new Date(trip.endTime)} ref={timeE} onChange={(e)=>{
        let today=new Date()
        today.setUTCHours=parseInt(timeE.current.value.split(":")[0])
        today.setUTCMinutes=parseInt(timeE.current.value.split(":")[1])
        console.log(timeE.current.value, new Date(timeE.current.value).toISOString())}}/></div>
        <div className="flex justify-between w-100">
         <label htmlFor="empty">Empty seats</label>
      <input type="number" id="empty" defaultValue={trip.emptySeats} ref={empty} onChange={(e) => updateTripField(e, "emptySeats")}/></div>      
      <div className="flex justify-between w-100">
      <Button onClick={()=>showForm(false)}>Cancel</Button><Button onClick={updateTrip}>Update</Button></div></>
      )}
        </>
      )}
    
      {!isLoading && trip === null && <div>No data</div>}
      {isLoading && <Loader />}
      
    </div>
  );
}

export default PassengerTrip;


const Book = ({ state, color }) => {
  const strstate = toString(state);
  console.log("statuooos", state);
  switch (state) {
    case "declined":
      return (
        <Button $declined>
          {" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM3.58579 13L4.29289 12.2929L7.58579 9L4.29289 5.70711L3.58579 5L5 3.58579L5.70711 4.29289L9 7.58579L12.2929 4.29289L13 3.58579L14.4142 5L13.7071 5.70711L10.4142 9L13.7071 12.2929L14.4142 13L13 14.4142L12.2929 13.7071L9 10.4142L5.70711 13.7071L5 14.4142L3.58579 13Z"
              fill={color[state]}
            />
          </svg>
          Booking declined
        </Button>
      );
      break;
    case "approved":
      return (
        <Button $approved>
          {" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8.76822 12.6402L13.7682 6.64018L12.2318 5.35982L7.9328 10.5186L5.70711 8.29289L4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402Z"
              fill={color[state]}
            />
          </svg>
          Booking approved
        </Button>
      );
      break;
    case "pending":
      return (
        <Button $pending>
          {" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM10 3.5C10 2.94772 9.55229 2.5 9 2.5C8.44771 2.5 8 2.94772 8 3.5V8.75C8 9.44036 8.55964 10 9.25 10H12.5C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8H10V3.5Z"
              fill={color[state]}
            />
          </svg>
          Booking pending
        </Button>
      );
      break;
  }
};
const State2 = ({ state, text }) => {
  switch (state) {
    case "departed":
      return <TripTag $departed>{text}</TripTag>;
      break;
    case "arrived":
      return <Status $arrived>{text}</Status>;
      break;
    case "onboarding":
      return <Status $onboarding>{text}</Status>;
      break;
    case "scheduled":
      return <TripTag $scheduled>{text}</TripTag>;
      break;
    case "canceled":
      return <Status $canceled>{text}</Status>;
      break;
  }
};
