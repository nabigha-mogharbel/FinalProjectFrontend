// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
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

writeDB("KT","koura-tripoli", "10", "5", "32");
//if i call same function using same tripId, deta wil be replaced

function getTrip(db, tripId){
const tripRef=ref(db, "trips"+tripId, "/")
onValue(tripRef, (snapshot) => {
  const data=snapshot.val();
  //updateDistance(postElement, data)
}) 
onChildAdded(tripRef, (data)=>{

})
onChildChanged()
onChildRemoved()
}*/