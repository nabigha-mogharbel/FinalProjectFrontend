import { Outlet, Navigate } from "react-router-dom";
import TopNav from "../../Components/TopNav";
import BottomNav from "../../Components/BottomNav";
import {useEffect} from "react"
import {motion} from "framer-motion"
import "./index.css"
function PassengerView() {
    useEffect(()=>{
        if(window.innerWidth>681){return <Navigate to="/device-not-supported" />}
        
    },[])
    return ( <motion.div  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="app"><TopNav/>
        <div className="cont"><Outlet/></div>
        <BottomNav/>
        </motion.div> );
}

export default PassengerView;