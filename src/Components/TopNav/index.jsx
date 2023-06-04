import "./index.css"
import {TokenContext} from "../../context";
import { useContext } from "react";
import tl from "../../Images/logo_s.svg"
import Avatar from "../Avatar"
function TopNav() {
    let token=useContext(TokenContext)
    let id= token? token.userId : false
    return (  <div className="topNav">
        <img src={tl} alt="logo" width="55"/>
        <Avatar id={id} role={token.decoded.role}/>
        </div>);
}

export default TopNav;