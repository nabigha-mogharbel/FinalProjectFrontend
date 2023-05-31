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
 let colors={
  'green_d': '#204E66',
        'green_l': '#CBD5D9',
        // 'yellow_d': '#e7c504',
        'yellow_d':"#EDC852",
        'yellow_l': '#F7F1CC',
        'orange_d': '#D68527',
        'orange_l': '#EAC9A4',
        'gray_d': '#B3B3B3',
        'gray_l': '#E9E9E9',
        'blue_l': '#C5DBE7',
        'blue_d': '#0270A9',
        'departed': '#204E66',
        'onboard': '#FCDA23',
        'canceled': '#D68527',
        'scheduled': '#B3B3B3',
        'arrived': '#0270A9',
}
export {colors}
export const ColorPallete=createContext(colors)
