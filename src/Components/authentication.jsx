import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import {TokenContext} from "../context"
import { decodeToken } from "react-jwt";
import { useContext } from "react";
function Authentication(props) {
    let token=useContext(TokenContext)
//     console.log("auth auth", bb)
// const Cookie = new Cookies();
//     let token = Cookie.get("token");
//     let decoded = decodeToken(token);
console.log("auth checking", token)
    if(token.token===undefined){return <Navigate to="/app/login" />}
    if(token.decoded.role===props.role){return <>{props.children}</>}
 return <Navigate to="/app/login" />
}

export default Authentication;