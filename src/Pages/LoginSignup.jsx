//import { Children } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../Images/logo_lg.svg"
import "./index.css";
function LoginSignup({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="loginsignup"
    >
      <img src={logo} width="250"/>

      <div className="formcontainer mt-16">{children}</div>
    </motion.div>
  );
}

export default LoginSignup;
