//import { Children } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../Images/logo_lg.svg"
import "./index.css";
import { Navigate } from "react-router-dom";
function LoginSignup({ children }) {
  useEffect(()=>{
    if(window.innerWidth>680){return <Navigate to="/device-not-supported" />}
    
},[])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="loginsignup pt-8 pb-8"
    >
      <img src={logo} width="250"/>

      <div className="formcontainer mt-8">{children}</div>
    </motion.div>
  );
}

export default LoginSignup;
