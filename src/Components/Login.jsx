import {useState, useRef} from "react"
import {login} from "../fetchingFunctions/auth"
import axios from "axios"
import {URL} from "../vars"
import {Button, Input} from "./Styled"
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2"
import Loader from "../Components/Loading"
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
    const [loading, setLoading]=useState(false)
    const login=async(body)=>{
        setLoading(true)
        try{
        const URL=process.env.REACT_APP_BASE_URL;
        // const URL="http://192.168.120.18:8000/"
       axios.post(`${URL}app/auth/login`,body).then(
        function(success){
            if(success.status===200){
                const Cookie=new cookie();
                Cookie.set("token", success.data.token,{
                    path: '/',
                    maxAge: 31536000,
                })
                setLoading(false)
                toast.success(success.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    const nav=()=>{
                        if(decodeToken(success.data.token).role==="manager"){navigate("/app/manager/")}
                    else if(decodeToken(success.data.token).role==="passenger"){navigate("/app/passenger/")}
                    }
                    setTimeout(nav, 3000)
                    
            }else{
                setLoading(false)
                toast.error(success.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }, function(reject){
            setLoading(false)
                toast.error("error checking your credentials", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
        }
       )
    
     }catch(error){
            setError(error.message.data)
                toast.error(error.message.data, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
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
        <>
        
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
/>        { !loading&&<form  onSubmit={submitLogin}>
            {errorPhone && <p className='formerror'>* Phone number is required</p>}
            <label htmlFor='phone'>Phone Number<sup>*</sup></label>
            {!errorPhone &&<Input onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}
            {errorPhone &&<Input $error onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}

            {errorPassword && <p className='formerror'>* Password is required</p>}
            <label htmlFor='password'>Password<sup>*</sup></label>
            {!errorPassword && <Input type="password" onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            {errorPassword && <Input type="password" $error onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            <Button type="submit" className="self-center">Login</Button>
            <Link to="/app/signup" className="mt-2 self-center" style={{textDecoration:"underline"}}>You don't have an account?</Link>
        </form>}
        {loading&&<Loader/>}
        </>
 );
}

export default Login;
