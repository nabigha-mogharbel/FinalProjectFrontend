import { Outlet } from "react-router-dom";
import TopNav from "../../Components/TopNav";
import BottomNav from "../../Components/BottomNav";
import {motion} from "framer-motion"
function ManagerView() {
    return (
        <motion.div  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="app"><TopNav/>
        <div className="cont"><Outlet/></div>
        <BottomNav/>
        </motion.div> 
     );
}

export default ManagerView;