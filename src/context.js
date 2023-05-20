/*import React from "react"
export  const TokenContext = React.createContext({
    token:"", setToken: () => {}

  });*/
  import { createContext } from "react";
import Cookies from "universal-cookie";
import { decodeToken } from "react-jwt";
const Cookie = new Cookies();
let bb;
let token = Cookie.get("token");
if(!token){
 bb=null
  
}else{
  let decoded = decodeToken(token);
  bb=decoded
  }
export const TokenContext=createContext(bb)

