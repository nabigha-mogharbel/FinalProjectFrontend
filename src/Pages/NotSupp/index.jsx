import NotSupp from "../../Images/notSupp.png"
import "./index.css"
function NotSupported() {
    return ( <div className="device-not-supported">
        
        <h1>This app is developed for mobile devices. </h1><h1>Give it a try on your device</h1>
        {window.innerWidth>680 && window.innerWidth<800 &&<img src={NotSupp} width="640"/>}
        {window.innerWidth>800 && <img src={NotSupp} width="790"/>}


    </div> );
}

export default NotSupported;