import { Routes, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import { useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useState, useEffect, useContext } from "react";
import GenericFallback from "./Pages/404";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/LoginSignup";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PassengerView from "./Pages/PassengerView";
import Authentication from "./Components/authentication";
import Cookies from "universal-cookie";
import { decodeToken } from "react-jwt";
import PassengerMain from "./Components/PassengerMain";
import PassengerTrip from "./Components/PassengerTrip";
import "./App.css";
//export const TokenContext=createContext()
import { TokenContext } from "./context";
function App() {
  const navigate = useNavigate();
  const [isLogged, setLogged] = useState(false);
  const [role, setRole] = useState(null);
  const [id, setId] = useState(null);
  const location = useLocation();
  useEffect(() => {
    checkToken();
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    console.log("use effect is working");
  }, [navigate, location]);
  const checkToken = () => {
    const Cookie = new Cookies();
    let token = Cookie.get("token");
    let decoded = decodeToken(token);
    if (decoded) {
      setLogged(true);
      setId(decoded.userId);
      setRole(decoded.role);
    } else {
      setLogged(false);
    }

    /*if(!cookietoken){ setToken("")}*/
  };
  return (
    <AnimatePresence mode="wait">
      <TokenContext.Provider
        value={{ isLogged, setLogged, role, setRole, id, setId }}
      >
        <Routes key={location.pathname} location={location}>
          <Route
            path="/app/login"
            element={
              <LoginSignup>
                <Login />
              </LoginSignup>
            }
          />
          <Route
            path="/app/signup"
            element={
              <LoginSignup>
                <Signup />
              </LoginSignup>
            }
          />

          <Route
            path="/app/passenger/"
            element={
              <Authentication role="passenger">
                <PassengerView />{" "}
              </Authentication>
            }
          >
            <Route path="" element={<PassengerMain />} />
            <Route path="schedule/" element={<>scheule</>} />
            <Route
              path="trip/:tripId/"
              element={<PassengerTrip/>}
            />
            <Route
              path="live/trip/"
              element={<>Wow, you can see trip live location!</>}
            />
            <Route
              path="live/"
              element={
                <>
                  drop down to see which trips are live. choose one to see its
                  live location
                </>
              }
            />
            <Route path="settings" />
          </Route>
          <Route
            path="/app/login"
            element={
              <LoginSignup>
                <Login />
              </LoginSignup>
            }
          />
          <Route path="/app/manager/">
            <Route path="" element={<PassengerView />} />
            <Route path="schedule" />
            <Route path="trip/:tripId" />
            <Route path="live/:id" />
            <Route path="settings" />
          </Route>
          <Route path="*" element={<GenericFallback />} />
        </Routes>
      </TokenContext.Provider>
    </AnimatePresence>
  );
}

export default App;

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = React.useState(o);

  return <>{outlet}</>;
};
