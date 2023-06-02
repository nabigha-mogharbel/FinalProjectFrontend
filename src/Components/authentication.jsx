import { Navigate } from "react-router-dom";
import {TokenContext} from "../context"
import { useContext } from "react";
function Authentication(props) {
    let token=useContext(TokenContext)

console.log("auth checking", token)
    if(token.token===undefined){return <Navigate to="/app/login" />}
    if(token.decoded.role===props.role){return <>{props.children}</>}
 return <Navigate to="/app/login" />
}

export default Authentication;
