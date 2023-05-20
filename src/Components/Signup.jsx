import {useState, useRef} from "react"
import {login} from "../fetchingFunctions/auth"
import axios from "axios"
import {Button, Input} from "./Styled"
import { useNavigate, Link } from "react-router-dom"
function Signup() {
    const navigate = useNavigate();

    const [form, setForm]=useState({
        firstName:"",
        lastName:"",
        phone:"",
        password:"",
        role:"passenger"
    })
    const [errorPhone, setErrorPhone]=useState(false)
    const [errorPassword, setErrorPassword]=useState(false)
    const [errorFN, setErrorFN]=useState(false)
    const [errorLN, setErrorLN]=useState(false)

    const signup=async(body)=>{
        const URL='http://localhost:8000/'
        const logging=await axios.post(`${URL}app/auth/register`,body)
        console.log(logging);
        if(logging.status===201){
            navigate("/app/login")
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
        if(form.lastName!==""&&form.firstName!==""&form.phone!==""&form.password!==""){
            console.log("validated")
            signup(form)
        }
        

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
            default:
                return;

        }

    }
    return (
        <>
        <form  onSubmit={submitSignup}>
            {errorFN && <p className='formerror'>* First Name is required</p>}
            <label htmlFor='firstName'>First Name<sup>*</sup></label>
            {!errorFN && <Input name="firstName" onChange={(e)=>setFormData(e, "firstName")} value={form.firstName} id="firstName" placeholder='Enter Your First Name'/>}
            {errorFN && <Input $error name="firstName" onChange={(e)=>setFormData(e, "firstName")} value={form.firstName} id="firstName" placeholder='Enter Your First Name'/>}

            {errorLN && <p className='formerror'>* Last Name is required</p>}
            <label htmlFor='lastName'>Last Name<sup>*</sup></label>
            {!errorLN&&<Input name="lastName" onChange={(e)=>setFormData(e, "lastName")} value={form.lastName} id="lastName" placeholder='Enter Your Phone Number'/>}
            {errorLN&&<Input $error name="lastName" onChange={(e)=>setFormData(e, "lastName")} value={form.lastName} id="lastName" placeholder='Enter Your Phone Number'/>}

            {errorPhone && <p className='formerror'>* Phone number is required</p>}
            <label htmlFor='phone'>Phone Number<sup>*</sup></label>
            {!errorPhone &&<Input onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}
            {errorPhone &&<Input $error onChange={(e)=>setFormData(e, "phone")} value={form.phone} name="phone"  id="phone" placeholder='Enter Your Phone Number'/>}

            {errorPassword && <p className='formerror'>* Password is required</p>}
            <label htmlFor='password'>Password<sup>*</sup></label>
            {!errorPassword && <Input type="password" onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            {errorPassword && <Input type="password" $error onChange={(e)=>setFormData(e, "password")} value={form.password} placeholder="Enter Your Password" name="password" id="password"/>}
            <Button type="submit">Signup</Button>
        </form>
        <Link to="/app/login">Already registed?</Link>
        </>
 );
}

export default Signup;
