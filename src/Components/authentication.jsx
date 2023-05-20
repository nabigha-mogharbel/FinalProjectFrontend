import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { decodeToken } from "react-jwt";
function Authentication(props) {

const Cookie = new Cookies();
    let token = Cookie.get("token");
    let decoded = decodeToken(token);
    if(!token){return <Navigate to="/app/login" />}
    if(decoded.role===props.role){return <>{props.children}</>}
 return <Navigate to="/app/login" />
}

export default Authentication;
