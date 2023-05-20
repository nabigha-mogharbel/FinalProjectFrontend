import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Styled";
import Loader from "../Loading"
import { useNavigate } from "react-router-dom";
import "./index.css";
function PassengerMain() {
  const [trips, setTrips] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = async () => {
    try {
      const URL = "http://localhost:8000/";
      const trips = await axios.get(`${URL}app/trip/`);
      console.log(trips);
      if (trips.status === 200) {
        setTrips(trips.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="tripList">
      {!isLoading &&
        trips !== null &&
        trips.map((e) => {
          switch (e.tripStatus) {
            case "scheduled":
                console.log("im pocked")
                let st=new Date(e.scheduleId.startTime)
                let et=new Date(e.scheduleId.endTime)
                let date=new Date(e.date)
              return (
                <Card key={e._id} $scheduled onClick={()=> navigate(`/app/passenger/trip/${e._id}`)}>
                  {" "}
                  <h3>{e.scheduleId.startLocation} {e.scheduleId.endLocation}</h3>
                  <div className="time"><p>{st.getUTCHours()}:{st.getUTCMinutes()}</p> <p>{et.getUTCHours()}:{et.getUTCMinutes()}</p></div>
                  <div className="status">{e.tripStatus}</div>
                  <p className="date">{date.toISOString().substring(5, 10)}</p>
                </Card>
              );
            case "onboarding":
              return (
                <Card key={e._id} $onboard>
                  {" "}
                  Hello ya jame3a
                </Card>
              );
            case "canceled":
              return (
                <Card key={e._id} $canceled>
                  {" "}
                  Hello ya jame3a
                </Card>
              );
            case "arrived":
              return (
                <Card key={e._id} $arrived>
                  {" "}
                  Hello ya jame3a
                </Card>
              );
            case "departed":
              return (
                <Card key={e._id} $onboard>
                  {" "}
                  Hello ya jame3a
                </Card>
              );
              default:
                return <div key={e._id}></div>
          }
        })}
      {!isLoading && trips === null && <div>Faraghhhhhhghghghghghg</div>}
      {isLoading && <Loader/>}
    </div>
  );
}

export default PassengerMain;
