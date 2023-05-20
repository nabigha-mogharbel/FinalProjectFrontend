//import { Children } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
      <div className="formcontainer">{children}</div>
    </motion.div>
  );
}

export default LoginSignup;
