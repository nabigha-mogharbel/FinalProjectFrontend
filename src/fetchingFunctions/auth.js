import axios from "axios"
import {URL} from "../vars"
export const login=async(body)=>{
    const logging=await axios.post(URL,body)
    return logging
}