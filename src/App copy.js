import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav"
import {CPNav} from "./Nav"
import {Nav2} from "./Nav"
import { io } from "socket.io-client";
import { Marker, Popup , useMap, Rectangle, useMapEvent, useEventHandlers} from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Map from "./Map/Map";
import { useEffect, useState } from "react";
/*
useEffect(() => {
  const query = ref(db, "projects");
  return onValue(query, (snapshot) => {
    const data = snapshot.val();

    if (snapshot.exists()) {
      Object.values(data).map((project) => {
        setProjects((projects) => [...projects, project]);
      });
    }
  });
}, []);


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #d1bf2f;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #b1a429;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SadFace = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
`;

const NotFound = () => {
  let socket = io("http://localhost:5000/");
  socket.on("connection", (arg) => {
    console.log(arg); // world
  })
React.useEffect(()=>{
  socket.emit("hello", "batata");
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });

},[])

  return (
   <>{console.log("hiiiiii")}</>
  );
};

export default NotFound;*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, onValue, onChildAdded, onChildChanged, onChildRemoved} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyDeejVs8fpMzVCYYldtdLqDtPutVIyLHY4",
  authDomain: "tripoline-3fc02.firebaseapp.com",
  databaseURL: "https://tripoline-3fc02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tripoline-3fc02",
  storageBucket: "tripoline-3fc02.appspot.com",
  messagingSenderId: "360008997777",
  appId: "1:360008997777:web:cf580183981abf871b9830",
  measurementId: "G-GKG24WSV25"
};




export  function App2(){
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
function writeDB(tripId, tripname, x, y, seats){
const db=getDatabase();
const reference=ref(db, "trips/" + tripId);
set(reference, {
  tripname:tripname,
  x:x,
  y:y,
  seats:seats
})}

;
//if i call same function using same tripId, deta wil be replaced

/*function getTrip(db, tripId){
const tripRef=ref(db, "trips", "KT")
onValue(tripRef, (snapshot) => {
  const data=snapshot.val();
  //updateDistance(postElement, data)
}) }

  const db=getDatabase();
  const tripRef=ref(db, "trips/", "KT")
  onChildChanged(tripRef, (data)=>{
    console.log("real time batata",data)
})*/
const position = [51.505, -0.09]
  return(
    <div style={{width:"300px", height:"300px"}}>
   
    </div>
  )
}

export default function App() {

  const [coords, setCorrds] = useState({
    latitude: "",
    longitude: ""
  });
  const [display_name, setName] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      getCurrentCityName,
      error,
      options
    );
  }, []);

  function error(err) {
    if (
      err.code === 1 || //if user denied accessing the location
      err.code === 2 || //for any internal errors
      err.code === 3 //error due to timeout
    ) {     
      alert(err.message);
    } else {
      alert(err);
    }
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

  //get current location when the app loads for the first time
  function getCurrentCityName(position) {
    setCorrds({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });

    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
      "&lat=" + coords.latitude + "&lon=" + coords.longitude;
      
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
      }
    })
      .then((response) => response.json())
      .then((data) => setName(data.display_name));
  }

  //get input from text fields and append it to address object
  function update(field) {
    return (e) => {
      const value = e.currentTarget.value;
      setAddress((address) => ({ ...address, [field]: value }));
    };
  }

  //send the data on the state to the API
  function getData(url) {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setName(data[0].display_name);
        setCorrds({
          latitude: data[0].lat,
          longitude: data[0].lon
        });
      })
      .catch(() => error("Please Check your input"));
  }

  //set form input( data entered ) to state on form submit
  function submitHandler(e) {
    e.preventDefault();
    console.log(address);

    let url = `https://nominatim.openstreetmap.org/search?
    street=${address.street}
    &city=${address.city}
    &state=${address.state}
    &country=${address.country}
    &postalcode=${address.postalcode}&format=json`;

    getData(url);
  }

  return (
    <div className="App">
      <h1>Enter The address</h1>
      <section className="form-container">
        <form>
          <label>street:</label>
          <input
            value={address.street}
            placeholder="1234 abc street"
            onChange={update("street")}
            id="street"
            type="text"
          />
          <label>city:</label>
          <input
            placeholder="Los Angeles"
            type="text"
            value={address.city}
            onChange={update("city")}
            id="city"
          />
          <br />
          <label>State:</label>
          <input
            placeholder="CA / California"
            type="text"
            value={address.state}
            onChange={update("state")}
            id="state"
          />
          <label>zip code:</label>
          <input
            placeholder="91423"
            type="text"
            value={address.postalcode}
            onChange={update("postalcode")}
            id="postalcode"
          />
          <br />
          <label>Country:</label>
          <input
            placeholder="USA"
            type="text"
            value={address.country}
            onChange={update("country")}
            id="country"
          />
          <br />

          <button onClick={(e) => submitHandler(e)}>Search</button>
        </form>
      </section>
      <Map coords={coords} dispaly_name={display_name} />
    </div>
  );
}