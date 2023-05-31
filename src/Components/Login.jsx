import {useState, useRef} from "react"
import {login} from "../fetchingFunctions/auth"
import axios from "axios"
import {URL} from "../vars"
import {Button, Input} from "./Styled"
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"
import { ToastContainer, toast } from 'react-toastify';
import { decodeToken } from "react-jwt";
import cookie from "universal-cookie"
import 'react-toastify/dist/ReactToastify.css';
function Login(props) {
    const navigate = useNavigate();
    const [form, setForm]=useState({
        phone:"",
        password:""    })
        const [errors, setError]=useState("")
    const [errorPhone, setErrorPhone]=useState(false)
    const [errorPassword, setErrorPassword]=useState(false)
    const login=async(body)=>{
        try{
        const URL=process.env.REACT_APP_BASE_URL;
        // const URL="http://192.168.120.18:8000/"
        const logging=await axios.post(`${URL}app/auth/login`,body)
    
         if(logging.status===200){
            const Cookie=new cookie();
            Cookie.set("token", logging.data.token,{
                path: '/',
                maxAge: 31536000,
            })
            toast.success(logging.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                console.log("decoded token",decodeToken(logging.data.token))
                if(decodeToken(logging.data.token).role==="manager"){navigate("/app/manager/")}
                else if(decodeToken(logging.data.token).role==="passenger"){navigate("/app/passenger/")}
        }}catch(error){
            setError(error.message.data)
                toast.error(error.message.data, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            
        }
       // navigate("/app/passenger/")

    }
    const submitLogin= (e)=>{
        e.preventDefault();
        if(form.phone===""){
            setErrorPhone(true)
            
        }
        if(form.phone!==""){
            setErrorPhone(false)
            
        }
        if(form.password===""){
            setErrorPassword(true)
        }
        if(form.password!==""){
            setErrorPassword(false)
        }
        if(form.phone!==""&&form.password!==""){
            console.log("validated")
            login(form)

        }

    }
    const setFormData=(e,key)=>{
        switch(key){
            case 'phone':
                setForm({...form, phone:e.target.value.trim()});
                break;
            case 'password':
                setForm({...form, password:e.target.value});
                break;
            default:
                return;

        }

    }
    return (
        <form  onSubmit={submitLogin}>
            <ToastContainer 

position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>              <p>batata helwe: {errors}</p>
            {errorPhone && <p className='formerror'>* Phone number is required</p>}
            <label htmlFor='phone'>Phone Number<sup>*</sup></label>
            {!errorPhone &&<Input onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}
            {errorPhone &&<Input $error onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}

            {errorPassword && <p className='formerror'>* Password is required</p>}
            <label htmlFor='password'>Password<sup>*</sup></label>
            {!errorPassword && <Input type="password" onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            {errorPassword && <Input type="password" $error onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            <Button type="submit">Login</Button>
            <Link to="/app/signup">You don't have an account?</Link>
        </form>
 );
}

export default Login;
