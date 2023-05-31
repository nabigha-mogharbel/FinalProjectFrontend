import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useState, useEffect, useContext } from "react";
import GenericFallback from "./Pages/404";
import Home from "./Pages/Home";
// import Nav from "./Components/WebNav/index"
import ManagerMain from "./Components/ManagerMain";
import ManagerTrip from "./Components/ManagerTrip";
import ManagerView from "./Pages/ManagerView";
import LoginSignup from "./Pages/LoginSignup";
import PassengerLive from "./Components/PassengerLive";
import Login from "./Components/Login";
import ManagerBookings from "./Components/ManagerBookings";
import Signup from "./Components/Signup";
import PassengerView from "./Pages/PassengerView";
import Authentication from "./Components/authentication";
import Cookies from "universal-cookie";
import { decodeToken } from "react-jwt";
import ManagerLive from "./Components/ManagerLive"
import PassengerMain from "./Components/PassengerMain";
import PassengerTrip from "./Components/PassengerTrip";
import "./App.css";
import PassengerSettings from "./Components/PassengerSettings";
import { TokenContext, ColorPallete, colors } from "./context";
function App() {
  const navigate = useNavigate();
  const [isLogged, setLogged] = useState(false);
  const [toke, setToken] = useState("");
  const [role, setRole] = useState(null);
  const [id, setId] = useState(null);
  const location = useLocation();

  const Cookie = new Cookies();
  let bb;
  let token = Cookie.get("token");
  if (!token) {
    bb = null;
  } else {
    let decoded = decodeToken(token);
    bb = decoded;
  }
  //const TokenContext=createContext(bb)
  useEffect(() => {
    checkToken();
  }, [navigate, location]);
  const checkToken = () => {
    const Cookie = new Cookies();
    let token = Cookie.get("token");
    let decoded = decodeToken(token);
    if (decoded) {
      setLogged(true);
      setToken(token);
      setId(decoded.userId);
      setRole(decoded.role);
    } else {
      setLogged(false);
    }

    /*if(!cookietoken){ setToken("")}*/
  };
  return (
    <AnimatePresence mode="wait">
      <ColorPallete.Provider value={colors}>
        <TokenContext.Provider value={{ token: token, decoded: bb }}>
          <Routes key={location.pathname} location={location}>
            <Route
              path="/app/login"
              element={
                <LoginSignup>
                  <Login />
                </LoginSignup>
              }
            />
            <Route path="/" element={<>Home</>} />
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
                  <PassengerView />
                </Authentication>
              }
            >
              <Route path="" element={<PassengerMain />} />
              <Route path="schedule/" element={<>scheule</>} />
              <Route path="trip/:tripId/" element={<PassengerTrip />} />
              <Route path="live/trip/:tripId" element={<PassengerLive />} />
              <Route
                path="live/"
                element={
                  <>
                    drop down to see which trips are live. choose one to see its
                    live location
                  </>
                }
              />
              <Route path="settings" element={<PassengerSettings />} />
            </Route>
            <Route
              path="/app/login"
              element={
                <LoginSignup>
                  <Login />
                </LoginSignup>
              }
            />
            <Route
              path="/app/manager/"
              element={
                <Authentication role="manager">
                  <ManagerView />
                </Authentication>
              }
            >
              <Route path="" element={<ManagerMain />} />
              <Route path="schedule" />
              <Route path="trip/:tripId" element={<ManagerTrip />} />
              <Route path="live/:id" element={<ManagerLive />} />
              <Route path="settings" />
              <Route path="bookings/:tripId" element={<ManagerBookings />} />
            </Route>
            <Route path="*" element={<GenericFallback />} />
          </Routes>
        </TokenContext.Provider>
      </ColorPallete.Provider>
    </AnimatePresence>
  );
}

export default App;

