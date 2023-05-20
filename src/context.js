/*import React from "react"
export  const TokenContext = React.createContext({
    token:"", setToken: () => {}

  });*/
  import { createContext } from "react";
export const TokenContext = createContext(null)