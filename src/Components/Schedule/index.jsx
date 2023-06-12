import { useEffect, useState, useRef, useMemo, useContext } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import L, { LatLng } from 'leaflet';
import axios from "axios"
import 'leaflet/dist/leaflet.css';
import throttle from 'lodash/throttle';
import { TokenContext, ColorPallete } from "../../context";
import { Tab } from '@headlessui/react'
import BusStops from "./busStops"
import Table from "./schedule"
import Tabs from "./classnames"
import "./index.css"
function Schedule(){
  const btnS=useRef()
  const btnM=useRef()
    const [isMapShown,setMapShown]=useState(false)
    const toggleMap=(value)=>{
      if (value) {
        btnS.current.classList.remove('active');
        btnM.current.classList.add('active');
        setMapShown(true)
      } else {
        btnM.current.classList.remove('active');
        btnS.current.classList.add('active');
        setMapShown(false)
      }
    }
    
    return(
      <div className='w-11/12'>
        <div className='w-fit flex justify-between gap-4 mr-auto ml-auto tabs mb-8'>
          <button className='active tab'  onClick={()=>toggleMap(false)} ref={btnS}>Schedule</button>
          <button className="tab" onClick={()=>toggleMap(true)} ref={btnM}> Bus Stops</button>
        </div>
     
      {isMapShown&& <BusStops/>}
      {!isMapShown&& <Table/>}
      </div>
    )
}
export default Schedule