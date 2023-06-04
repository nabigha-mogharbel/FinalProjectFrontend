import { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import { Card, Button, Status } from "../Styled";
import { Switch } from '@headlessui/react'
import Popup from "../Popup"
import Loader from "../Loading";
import { io } from "socket.io-client";
import map from "../../Images/map.webp"
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import "./index.css";
import Swal from "sweetalert2";
import { TokenContext, ColorPallete } from "../../context";
function PassengerTrip() {
  let token = useContext(TokenContext);
  let color=useContext(ColorPallete)
  const [trip, setTrip] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const tripId = useParams();

  useEffect(() => {
    getTrip();
    const SOCKET=process.env.REACT_APP_BASE_SOCKET;
    let socket = io(SOCKET);
    socket.on("tripWatching", (args) => {
      let batata = { ...args };
      if (batata) {
        if (batata.documentKey._id === tripId.tripId) {
          const arg = batata["updateDescription"]["updatedFields"];
          delete arg.scheduleId;
          console.log("sock sock");
          let cc = { ...trip, ...arg };
          console.log("bobo", cc);
          setTrip(cc);
        }
      }
    });
  }, []);

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
            console.log("suxcc", success)
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

  const updateTrip = async (e, param) => {
    const URL=process.env.REACT_APP_BASE_URL;
    let req={}
    req[param]=e.target.value
    console.log("req", req)
    try {
      axios
        .put( 
          `${URL}app/trip/${tripId.tripId}`,
          req,
          { headers: { Authorization: `Bearer ${token.token}` } }
        )
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
  return (
    <div className="tripList">
      <Button>
        <Link to="/app/passenger/">
         
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
      {!isLoading && trip !== null && (
        <>        <div>
          <h1>
            {trip.scheduleId.startLocation} {" "}
            {trip.scheduleId.endLocation}
          </h1>
          {/* <State state={trip.tripStatus} text={trip.tripStatus} />
           */}
           <Status dolla={trip.tripStatus}><div className="status">{trip.tripStatus}</div></Status>
          <p>
            {new Date(trip.scheduleId.startTime).getHours()}:
            {new Date(trip.scheduleId.startTime).getMinutes()}
          </p>
          <p>
            {new Date(trip.scheduleId.endTime).getHours()}:
            {new Date(trip.scheduleId.endTime).getMinutes()}
          </p>
          
          <p className="flex flex-row gap-4">
            <svg
              width="40"
              height="28"
              viewBox="0 0 40 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0336914 6.03164C0.0336914 8.18817 1.78816 9.94258 3.94463 9.94258H6.26953L18.4121 26.0522C18.7746 26.5331 19.2512 26.9295 19.7903 27.1982C20.3294 27.467 20.9327 27.609 21.5352 27.609H36.0553C38.2118 27.609 39.9663 25.8545 39.9663 23.698V22.1667C39.9663 20.0103 38.2118 18.2558 36.0553 18.2558H24.8638L12.7214 2.14626C12.3588 1.66523 11.8822 1.26896 11.3431 1.00016C10.804 0.731425 10.2007 0.589355 9.59827 0.589355H3.94463C1.7881 0.589355 0.0336914 2.34383 0.0336914 4.50029V6.03164ZM2.91543 4.50043C2.91543 3.93202 3.37622 3.47123 3.94463 3.47123H9.5982C9.92129 3.47123 10.2256 3.62292 10.4201 3.88089L23.1184 20.7279C23.313 20.9859 23.6172 21.1377 23.9403 21.1377H36.0555C36.6238 21.1377 37.0847 21.5984 37.0847 22.1668V23.6981C37.0847 24.2664 36.6238 24.7273 36.0555 24.7273H21.5353C21.2122 24.7273 20.9079 24.5756 20.7134 24.3175L8.01499 7.47049C7.82052 7.21252 7.5162 7.06083 7.19312 7.06083H3.94463C3.37622 7.06083 2.91543 6.60005 2.91543 6.03164V4.50043Z"
                fill="black"
              />
              <path
                d="M36.0554 27.6427H21.5352C20.9276 27.6427 20.319 27.4995 19.7753 27.2284C19.2317 26.9575 18.751 26.5577 18.3852 26.0725L6.25279 9.97633H3.94457C1.76954 9.97633 0 8.20679 0 6.03176V4.50048C0 2.32545 1.76954 0.555908 3.94457 0.555908H9.59814C10.2057 0.555908 10.8142 0.699188 11.358 0.970276C11.9017 1.24136 12.3824 1.64107 12.7482 2.12627L24.8805 18.2225H36.0554C38.2305 18.2225 40 19.992 40 22.167V23.6982C40 25.8733 38.2305 27.6427 36.0554 27.6427ZM3.94457 0.623176C1.80661 0.623176 0.0672676 2.36251 0.0672676 4.50048V6.03176C0.0672676 8.16972 1.80661 9.90906 3.94457 9.90906H6.28629L6.29638 9.92245L18.4389 26.032C18.7985 26.509 19.271 26.9019 19.8053 27.1682C20.3397 27.4347 20.9378 27.5755 21.5352 27.5755H36.0553C38.1933 27.5755 39.9327 25.8362 39.9327 23.6982V22.1669C39.9327 20.029 38.1933 18.2897 36.0553 18.2897H24.847L24.8369 18.2763L12.6945 2.1667C12.335 1.68984 11.8625 1.29693 11.3281 1.03041C10.7936 0.764034 10.1954 0.623176 9.59821 0.623176H3.94457ZM36.0555 24.7611H21.5352C21.2035 24.7611 20.8862 24.6029 20.6865 24.3379L7.98803 7.49086C7.80102 7.24271 7.50377 7.09459 7.19299 7.09459H3.94457C3.35854 7.09459 2.88174 6.61779 2.88174 6.03176V4.50055C2.88174 3.91451 3.35854 3.43772 3.94457 3.43772H9.59814C9.92991 3.43772 10.2472 3.59587 10.4469 3.86083L23.1452 20.7078C23.3323 20.9559 23.6295 21.1042 23.9402 21.1042H36.0554C36.6414 21.1042 37.1182 21.5809 37.1182 22.167V23.6982C37.1183 24.2843 36.6415 24.7611 36.0555 24.7611ZM3.94457 3.50499C3.3956 3.50499 2.94901 3.95158 2.94901 4.50055V6.03176C2.94901 6.58073 3.3956 7.02732 3.94457 7.02732H7.19306C7.52482 7.02732 7.84212 7.18547 8.04184 7.45043L20.7403 24.2974C20.9273 24.5455 21.2245 24.6938 21.5352 24.6938H36.0555C36.6044 24.6938 37.0511 24.2471 37.0511 23.6982V22.1669C37.0511 21.618 36.6044 21.1714 36.0555 21.1714H23.9403C23.6086 21.1714 23.2913 21.0132 23.0916 20.7482L10.3932 3.90126C10.2062 3.65311 9.90899 3.50499 9.59821 3.50499H3.94457Z"
                fill="black"
              />
              <path
                d="M36.0541 0.391113H36.0537L23.2668 0.396158C22.2171 0.396562 21.2319 0.807096 20.4925 1.55208C19.7531 2.29714 19.3501 3.28544 19.3575 4.33501V4.34342L19.3577 4.35176L19.3774 5.87645C19.3873 6.9121 19.7974 7.88385 20.5326 8.61384C21.2702 9.34611 22.2488 9.74938 23.2881 9.74938L36.0517 9.74434C37.095 9.74393 38.0761 9.33757 38.8142 8.60025C39.5523 7.86293 39.9596 6.88223 39.9611 5.83891L39.965 4.3108V4.30918V4.30757C39.9664 3.26182 39.5602 2.27844 38.8213 1.53863C38.0824 0.79862 37.0996 0.391113 36.0541 0.391113ZM37.0793 5.83468C37.0785 6.40235 36.6183 6.86226 36.0506 6.86246L23.2885 6.8675C23.2884 6.8675 23.2882 6.8675 23.288 6.8675C22.7226 6.8675 22.2629 6.41123 22.2589 5.84571L22.2391 4.3145C22.235 3.74339 22.6968 3.27817 23.2679 3.2779L36.0535 3.27286H36.0539C36.6229 3.27279 37.0839 3.73445 37.0831 4.30346L37.0793 5.83468Z"
                fill="black"
              />
              <path
                d="M23.288 9.78289C22.2398 9.78289 21.2528 9.37612 20.5089 8.63759C19.7676 7.90155 19.3538 6.92099 19.3437 5.87666L19.3238 4.33509C19.3163 3.27663 19.7229 2.2798 20.4687 1.52835C21.2144 0.776902 22.2081 0.36287 23.2668 0.362467L36.0538 0.357422C37.1086 0.357422 38.0999 0.768427 38.8452 1.51469C39.5904 2.26096 40.0001 3.25275 39.9986 4.30744L39.9948 5.83892C39.9933 6.89119 39.5824 7.88029 38.838 8.62394C38.0935 9.36765 37.104 9.77744 36.0517 9.77791L23.288 9.78289ZM36.054 0.424689L23.2667 0.429734C22.2261 0.430138 21.2494 0.837107 20.5163 1.57571C19.7833 2.3143 19.3836 3.29412 19.391 4.33469L19.3912 4.3511L19.4109 5.87585C19.4208 6.90249 19.8275 7.8663 20.5562 8.58976C21.2874 9.31572 22.2576 9.71556 23.2879 9.71556L36.0515 9.71051C37.0858 9.71011 38.0585 9.30724 38.7903 8.57624C39.522 7.84525 39.9258 6.8731 39.9273 5.83872L39.9311 4.31054C39.9325 3.27058 39.5299 2.29567 38.7974 1.56218C38.0649 0.828698 37.0906 0.424689 36.054 0.424689ZM23.2885 6.90108C22.7061 6.90108 22.2294 6.42772 22.2252 5.84585L22.2054 4.31484C22.2034 4.02943 22.313 3.76083 22.5139 3.55835C22.7148 3.35588 22.9827 3.24435 23.2679 3.24421L36.0539 3.23917C36.338 3.23917 36.6051 3.34982 36.8059 3.55088C37.0067 3.75195 37.1171 4.0192 37.1167 4.30347L37.1128 5.83475C37.112 6.41971 36.6354 6.89583 36.0505 6.89603L23.2885 6.90108ZM36.0536 3.2728V3.30643L23.2679 3.31148C23.0007 3.31155 22.75 3.41608 22.5617 3.60577C22.3735 3.7954 22.2709 4.04705 22.2728 4.31424L22.2926 5.84525C22.2965 6.39045 22.743 6.83388 23.288 6.83388L36.0506 6.82883C36.5986 6.82863 37.0449 6.38265 37.0457 5.83469L37.0496 4.30341C37.05 4.03723 36.9466 3.78686 36.7585 3.59851C36.5704 3.41016 36.3202 3.3065 36.054 3.3065L36.0536 3.2728Z"
                fill="black"
              />
            </svg>{" "}
            {trip.currentPassengers}

          </p>
          <p className="flex flex-row gap-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill={color["pending"]}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM10 3.5C10 2.94772 9.55229 2.5 9 2.5C8.44771 2.5 8 2.94772 8 3.5V8.75C8 9.44036 8.55964 10 9.25 10H12.5C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8H10V3.5Z"
              fill={color["pending"]}
            />
          </svg>{trip.bookedPassengers.filter(book=> {return book.status==="pending"}).length}  pending</p>
                    <p className="flex flex-row gap-4">
                    <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM3.58579 13L4.29289 12.2929L7.58579 9L4.29289 5.70711L3.58579 5L5 3.58579L5.70711 4.29289L9 7.58579L12.2929 4.29289L13 3.58579L14.4142 5L13.7071 5.70711L10.4142 9L13.7071 12.2929L14.4142 13L13 14.4142L12.2929 13.7071L9 10.4142L5.70711 13.7071L5 14.4142L3.58579 13Z"
              fill={color["declined"]}
            />
          </svg>{trip.bookedPassengers.filter(book=> {return book.status==="declined"}).length} declined</p>
          <p className="flex flex-row gap-4"><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8.76822 12.6402L13.7682 6.64018L12.2318 5.35982L7.9328 10.5186L5.70711 8.29289L4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402Z"
              fill={color["approved"]}
            />
          </svg>{trip.bookedPassengers.filter(book=> {return book.status==="approved"}).length} approved</p>

          <select value={trip.tripStatus} onChange={(e)=> updateTrip(e,"tripStatus")}>
            <option value="departed">Departed</option>
            <option value="arrived">Arrived</option>
            <option value="onboarding">Onboarding</option>
            <option value="declined">Declined</option>
            <option value="scheduled">Scheduled</option>
            
          </select>
           <select value={trip.busStatus} onChange={(e)=> updateTrip(e,"busStatus")}>
            <option value="full">Full</option>
            <option value="delayed">Delayed</option>
            <option value="onboarding">Onboarding</option>
            <option value="good">Good</option>            
          </select>
          <Button><Link to={`/app/manager/bookings/${tripId.tripId}`}>Manage Bookings</Link></Button>
          {trip.tripStatus === "departed"  && <Button $yellow><Link to={`/app/manager/live/${tripId.tripId}`}>Go Live</Link ></Button>}
        </div></>
      )}
      {!isLoading && trip === null && <div>Faraghhhhhhghghghghghg</div>}
      {isLoading && <Loader />}

    </div>
  );
}

export default PassengerTrip;

const State=({state, text})=>{
  switch(state){
   case "departed":          
   return <Status $departed><div className="status">{text}</div></Status>;
   case "arrived":        
   return <Status $arrived><div className="status">{text}</div></Status>;
   case "onboarding":    
   return <Status $onboarding><div className="status">{text}</div></Status>;
  case "scheduled": 
  return <Status $scheduled><div className="status">{text}</div></Status>;
  case "canceled": 
  return <Status $canceled><div className="status">{text}</div></Status>;
  }

}
const Book=({state, color})=>{
  const strstate=toString(state)
  console.log("statuooos",state)
  switch(state){
    case "declined":
      return <Button $declined> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM3.58579 13L4.29289 12.2929L7.58579 9L4.29289 5.70711L3.58579 5L5 3.58579L5.70711 4.29289L9 7.58579L12.2929 4.29289L13 3.58579L14.4142 5L13.7071 5.70711L10.4142 9L13.7071 12.2929L14.4142 13L13 14.4142L12.2929 13.7071L9 10.4142L5.70711 13.7071L5 14.4142L3.58579 13Z" fill={color[state]}/>
      </svg>
      Booking declined</Button> ;
      break;
    case "approved":
      return <Button $approved > <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8.76822 12.6402L13.7682 6.64018L12.2318 5.35982L7.9328 10.5186L5.70711 8.29289L4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402Z" fill={color[state]}/>
      </svg>Booking approved</Button> ;
      break;
    case "pending":
      return  <Button $pending> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM10 3.5C10 2.94772 9.55229 2.5 9 2.5C8.44771 2.5 8 2.94772 8 3.5V8.75C8 9.44036 8.55964 10 9.25 10H12.5C13.0523 10 13.5 9.55228 13.5 9C13.5 8.44772 13.0523 8 12.5 8H10V3.5Z" fill={color[state]}/>
      </svg>
      Booking pending</Button>;
      break;

  }
}
