import { useEffect, useState , useContext} from "react";
import axios from "axios";
import { Card } from "../Styled";
import Loader from "../Loading"
import { useNavigate } from "react-router-dom";
import "./index.css";
import { TokenContext } from "../../context";
function PassengerMain() {
  const [trips, setTrips] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token=useContext(TokenContext)
  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = async () => {
    try {
      const URL = process.env.REACT_APP_BASE_URL;
      // const URL="http://192.168.120.18:8000/"
      // const URL= env.API_URL
      const trips = await axios.get(`${URL}app/trip/sched/upcoming`, {"headers":{Authorization: `Bearer ${token.token}`}});
      console.log(trips);
      if (trips.status === 200||trips.status===304) {
        setTrips(trips.data.data);
        setLoading(false);
      }else{
        setLoading(false)
        setTrips(null)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="tripList w-11/12">
            <h1 className="pb-2 border-b-2 border-gray-300">Upcoming Trips</h1>
      {!isLoading &&
        trips !== null &&
        trips.map((e) => {
          let st=new Date(e.scheduleId.startTime)
          let et=new Date(e.scheduleId.endTime)
          let date=new Date(e.date)
          switch (e.tripStatus) {
            case "scheduled":
              return (
                <Card key={e._id} $scheduled onClick={()=> navigate(`/app/manager/trip/${e._id}`)}>
                  {" "}
                  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
                  <div className="time"><p>{st.getHours()}:{st.getMinutes()}</p> <p>{et.getHours()}:{et.getMinutes()}</p></div>
                  <div className="status">{e.tripStatus}</div>
                  <p className="date">{date.getDate()}{"-"}{date.getMonth()+1}</p>
                </Card>
              );
            case "onboarding":

              return (
                <Card key={e._id} $onboard onClick={()=> navigate(`/app/manager/trip/${e._id}`)}>
                  {" "}
                  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
                  <div className="time"><p>{st.getHours()}:{st.getMinutes()}</p> <p>{et.getHours()}:{et.getMinutes()}</p></div>
                  <div className="status">{e.tripStatus}</div>
                  <p className="date">{date.getDate()}{"-"}{date.getMonth()+1}</p>
                </Card>
              );
            case "canceled":
           
              return (
                <Card key={e._id} $canceled onClick={()=> navigate(`/app/manager/trip/${e._id}`)}>
                  {" "}
                  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
                  <div className="time"><p>{st.getHours()}:{st.getMinutes()}</p> <p>{et.getHours()}:{et.getMinutes()}</p></div>
                  <div className="status">{e.tripStatus}</div>
                  <p className="date">{date.getDate()}{"-"}{date.getMonth()+1}</p>
                </Card>
              );
            case "arrived":
              return (
                <Card key={e._id} $arrived onClick={()=> navigate(`/app/manager/trip/${e._id}`)}>
                  {" "}
                  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
                  <div className="time"><p>{st.getHours()}:{st.getMinutes()}</p> <p>{et.getHours()}:{et.getMinutes()}</p></div>
                  <div className="status">{e.tripStatus}</div>
                  <p className="date">{date.getDate()}{"-"}{date.getMonth()+1}</p>
                </Card>
              );
            case "departed":
              return (
                <Card key={e._id} $departed onClick={()=> navigate(`/app/manager/trip/${e._id}`)}>
                  {" "}
                  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
                  <div className="time"><p>{st.getHours()}:{st.getMinutes()}</p> <p>{et.getHours()}:{et.getMinutes()}</p></div>
                  <div className="status">{e.tripStatus}</div>
                  <p className="date">{date.getDate()}{"-"}{date.getMonth()+1}</p>
                </Card>
              );
              default:
                return <div key={e._id}></div>
          }
        })}
      {!isLoading && trips === null && <div>No Trips for Today</div>}
      {isLoading && <Loader/>}
    </div>
  );
}

export default PassengerMain;
