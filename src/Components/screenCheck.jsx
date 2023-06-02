import { Navigate } from "react-router-dom";
import {TokenContext} from "../context"
import { useContext } from "react";
function ScreenCheck(props) {
    if(window.innerWidth<681){return <>{props.children}</>}
 return <Navigate to="/device-not-supported" />
}

export default ScreenCheck;
