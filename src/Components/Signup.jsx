import {useState, useEffect, useRef} from "react"
import axios from "axios"
import {Button, Input} from "./Styled"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from "react-router-dom"
import Loader from "../Components/Loading"
function Signup() {
    const navigate = useNavigate();
    const toastId = useRef(null);
    const [form, setForm]=useState({
        firstName:"",
        lastName:"",
        phone:"",
        password:"",
        role:"passenger"
    })
    const [loading, setLoading]=useState(false)
    const [repass, setRepass]=useState("")
    const [errorPhone, setErrorPhone]=useState(false)
    const [errorPassword, setErrorPassword]=useState(false)
    const [errorFN, setErrorFN]=useState(false)
    const [errorLN, setErrorLN]=useState(false)
    const [errorMatchPass, setErrorMatchPass]=useState(false)
    useEffect(()=>{
     
   }, [])
    const signup=async(body)=>{
        setLoading(true)

        const URL=process.env.REACT_APP_BASE_URL;
      try{axios.post(`${URL}app/auth/register`,body).then(
        function(s){
            console.log(s)
            setLoading(false)
            toast.success(`${s.data.message}`, {
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
                if(s.status===201){
                    navigate("/app/login")
                }
            }
            setTimeout(nav, 3000)
        }, function(r){
            toast.error(`${r.data.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setLoading(false)
        }
      )
    }catch(error){
        toast.error("please check your internet", {
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

    }
    const submitSignup= (e)=>{
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
        if(form.firstName===""){
            setErrorFN(true)
            
        }
        if(form.firstName!==""){
            setErrorFN(false)
            
        }
        if(form.lastName===""){
            setErrorLN(true)
        }
        if(form.lastName!==""){
            setErrorLN(false)
        }
        if(form.password!==repass){
            setErrorMatchPass(true)
            toast.error("password not matching",{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                } )
        }
        if(form.password===repass){
        if(form.lastName!==""&&form.firstName!==""&form.phone!==""&form.password!==""){
            signup(form)
        }}
        

    }
    const setFormData=(e,key)=>{
        switch(key){
            case "firstName":
                setForm({...form, firstName:e.target.value.trim()});
                break;
            case 'lastName':
                setForm({...form, lastName:e.target.value.trim()});
                break;
            case 'phone':
                setForm({...form, phone:e.target.value.trim()});
                break;
            case 'password':
                setForm({...form, password:e.target.value});
                break;
            case "repassword":
                setRepass(e.target.value);
            default:
                return;
        }
    }

    return (
        <>
         <ToastContainer 

position="top-right"
autoClose={3000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
theme="light"
/> 
        {!loading&&<form  onSubmit={submitSignup}>
       
            {errorFN && <p className='formerror'>* First Name is required</p>}
            <label htmlFor='firstName'>First Name<sup>*</sup></label>
            {!errorFN && <Input name="firstName" onChange={(e)=>setFormData(e, "firstName")} value={form.firstName} id="firstName" placeholder='Enter Your First Name'/>}
            {errorFN && <Input $error name="firstName" onChange={(e)=>setFormData(e, "firstName")} value={form.firstName} id="firstName" placeholder='Enter Your First Name'/>}

            {errorLN && <p className='formerror'>* Last Name is required</p>}
            <label htmlFor='lastName'>Last Name<sup>*</sup></label>
            {!errorLN&&<Input name="lastName" onChange={(e)=>setFormData(e, "lastName")} value={form.lastName} id="lastName" placeholder='Enter Your Phone Number'/>}
            {errorLN&&<Input $error name="lastName" onChange={(e)=>setFormData(e, "lastName")} value={form.lastName} id="lastName" placeholder='Enter Your Phone Number'/>}

            {errorPhone && <p className='formerror'>* Phone number is required</p>}
            <label htmlFor='phone'>Phone Number<sup>*</sup> <span style={{fontSize:"10px"}}>(only number, no spaces or characters)</span></label>
            {!errorPhone &&<Input type="number" onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}
            {errorPhone &&<Input type="number" $error onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}

            {errorPassword && <p className='formerror'>* Password is required</p>}
            <label htmlFor='password'>Password<sup>*</sup></label>
            {!errorPassword && <Input type="password" onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            {errorPassword && <Input type="password" $error onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            <label htmlFor='repassword'>Confirm Password<sup>*</sup></label>
            {!errorMatchPass && <Input type="password" onChange={(e)=>setFormData(e, "repassword")} value={repass} placeholder="Re-Enter Your Password" name="repassword" id="repassword"/>}
            {errorMatchPass && <Input type="password" $error onChange={(e)=>setFormData(e, "repassword")} value={repass} placeholder="Re-Enter Your Password" name="repassword" id="repassword"/>}
            <Button type="submit" className="self-center">Signup</Button>
        
        <Link to="/app/login" style={{textDecoration:"underline"}} className=" self-center mt-2" >Already registed?</Link>
        </form>}
        {loading&&<Loader/>}
        </>
 );
}

export default Signup;
