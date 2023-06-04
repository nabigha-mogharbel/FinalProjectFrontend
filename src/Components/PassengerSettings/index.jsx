import { TokenContext } from "../../context";
import axios from "axios";
import { useEffect, useState, useContext, useRef } from "react";
import tl from "../../Images/tl.png";
import { Input, Button } from "../Styled";
import "./index.css"
function PassengerSettings() {
  let token = useContext(TokenContext);
  const [user, setUser] = useState([]);
  const [newData, setNewData] = useState([]);
  const [form, setform]=useState({})
  const [password, setPass] = useState("");
  const [repassword, setrePass] = useState("");
  const [edit, setEdit] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  useEffect(() => {
    console.log(token.decoded.userId);
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}app/auth/id/${token.decoded.userId}`
      )
      .then(function (success) {
        console.log(success.data);
        setUser(success.data.data);
        setNewData(success.data.data);
      });
  }, []);
  const handleChange = (e, param) => {
    if (param === "password") {
      setPass(e.target.value);
    } else if (param === "repassword") {
      setrePass(e.target.value);
    } else {
      let old = { ...newData };
      let t={...form}
      old[param] = e.target.value;
      setNewData(old);
     t[param]=e.target.value
     setform(t)
    }
    if (password !== repassword) {
      setErrorPass(true);
    }
    if (password === repassword) {
      setErrorPass(false);
    }
  };
  const sendEdits = async () => {
    let formdata={...form}
    if(password!==""&& repassword!==""&&password===repassword){
        formdata.password=password
    }
    try{axios.put(`${process.env.REACT_APP_BASE_URL}app/auth/update/${token.decoded.userId}`, formdata).then(
        function(s){
            
        },function(r){

        }
    )}catch(e){console.log(e)}
  };
  return (
    <div className="setting">
      <div className="setting-container w-10/12 flex flex-column items-start">
      {!edit && <>
      <h1>Hello {newData.firstName}!</h1>
      <Button className="self-end" onClick={()=>setEdit(true)}>Edit</Button>
      <p>Name</p>
      <p>{newData.firstName} {newData.lastName}</p>
      <p>Phone Number</p>
      <p>{newData.phone}</p>
      </>}
     {edit&&<> <h1>Edit your information</h1>
      <label htmlFor="firstName">First Name</label>
      <Input
        type="text"
        name="firstName"
        id="firstName"
        value={newData.firstName}
        onChange={(e) => handleChange(e, "firstName")}
      />
      <label htmlFor="lastName">Last Name</label>
      <Input
        type="text"
        name="lastName"
        id="lastName"
        value={newData.lastName}
        onChange={(e) => handleChange(e, "lastName")}
      />
      <label htmlFor="phone">Phone Number</label>
      <Input
        type="text"
        name="phone"
        id="phone"
        value={newData.phone}
        onChange={(e) => handleChange(e, "phone")}
      />
      <label htmlFor="password">New Password</label>
      <Input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => handleChange(e, "password")}
      />
      <label htmlFor="repassword">Confirm New Password</label>
        <Input
          type="password"
          name="repassword"
          id="repassword"
          value={repassword}
          onChange={(e) => handleChange(e, "repassword")}
        />

        <div className="flex justify-between w-100">
      <Button onClick={sendEdits}>Submit edits</Button>
      <Button onClick={()=>setEdit(false)} $warning>Cancel</Button></div></>}
      </div>
    </div>
  );
}

export default PassengerSettings;
