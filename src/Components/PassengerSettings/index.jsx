import {TokenContext} from "../../context";
import { useContext } from "react";
import tl from "../../Images/tl.png"
function PassengerSettings() {
    let token=useContext(TokenContext)
    
    return ( <div>Settings!</div> );
}

export default PassengerSettings;