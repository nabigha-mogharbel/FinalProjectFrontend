import { useEffect, useState, useRef, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import L, { LatLng } from 'leaflet';
import axios from "axios"
import throttle from 'lodash/throttle';
import { TokenContext, ColorPallete } from "../../context";

function Schedule(){

    const data={
        message: "Schedule list retrieved",
        data: [
          {
            "_id": "647ccf81a5969f3956fdb0ae",
            "startLocation": "Tripoli",
            "endLocation": "Aaba",
            startTime: "1999-06-02T04:15:00.000Z",
            endTime: "1999-06-02T04:50:00.000Z",
            "days": [
              "[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\"]"
            ],
            "defaultDriverId": "647ccbfb904819a15d6c4252",
            "defaultBusId": {
              "_id": "647cccd3593945546e80cbc4",
              "name": "A13",
              "capacity": 33
            },
            "lineId": {
              "_id": "647cce6aa5969f3956fdb0a9",
              "name": "Tripoli/Aaba",
              "duration": "45",
              "price": 40,
              "busStops": [
                {
                  "name": "Sehet Nour",
                  "lon": 32.8373,
                  "lat": 37.8474,
                  "_id": "647cce6aa5969f3956fdb0aa"
                }
              ],
              "__v": 0
            },
            "__v": 0
          },
          {
            "_id": "647ccfb9a5969f3956fdb0b0",
            "startLocation": "Aaba",
            "endLocation": "Tripoli",
            startTime: "1999-06-02T05:15:00.000Z",
            endTime: "1999-06-02T05:50:00.000Z",
            "days": [
              "[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\"]"
            ],
            "defaultDriverId": "647ccbfb904819a15d6c4252",
            "defaultBusId": {
              "_id": "647cccd3593945546e80cbc4",
              "name": "A13",
              "capacity": 33
            },
            "lineId": {
              "_id": "647cce6aa5969f3956fdb0a9",
              "name": "Tripoli/Aaba",
              "duration": "45",
              "price": 40,
              "busStops": [
                {
                  "name": "Sehet Nour",
                  "lon": 32.8373,
                  "lat": 37.8474,
                  "_id": "647cce6aa5969f3956fdb0aa"
                }
              ],
              "__v": 0
            },
            "__v": 0
          }
        ]
      }
      const ballouta=[
        {
          "name": "Al Nour square, next to connexion",
          "lon": 34.434422,
          "lon__1": 35.835748
        },
        {
          "name": "Next to KFC",
          "lon": 34.429578,
          "lon__1": 35.834363
        },
        {
          "name": "Next to Honda",
          "lon": 34.426222,
          "lon__1": 35.833121
        },
        {
          "name": "Bahsas square",
          "lon": 34.421063,
          "lon__1": 35.830471
        },
        {
          "name": "Zaarour bakery",
          "lon": 34.41934,
          "lon__1": 35.829884
        },
        {
          "name": "Lebanese university",
          "lon": 34.41514,
          "lon__1": 35.831795
        },
        {
          "name": "Haykal Hospital",
          "lon": 34.412353,
          "lon__1": 35.831736
        },
        {
          "name": "LIT",
          "lon": 34.409465,
          "lon__1": 35.831346
        },
        {
          "name": "Faculty of law",
          "lon": 34.410354,
          "lon__1": 35.834335
        },
        {
          "name": "HOZ mall",
          "lon": 34.401896,
          "lon__1": 35.839006
        },
        {
          "name": "Bloom outlet",
          "lon": 34.399502,
          "lon__1": 35.840213
        },
        {
          "name": "LIU",
          "lon": 34.396566,
          "lon__1": 35.841806
        },
        
        {
          "name": "New makhfar",
          "lon": 34.390083,
          "lon__1": 35.8463
        },
        {
          "name": "Snack Abboud",
          "lon": 34.386067,
          "lon__1": 35.847123
        },
        {
          "name": "Khan Al Saboun",
          "lon": 34.383368,
          "lon__1": 35.847502
        },
        
        {
          "name": "Nakhle/Aazariyeh",
          "lon": 34.377351,
          "lon__1": 35.847077
        },
        {
          "name": "Actel school",
          "lon": 34.373585,
          "lon__1": 35.846185
        },
        
        {
          "name": "Kfar Qahel",
          "lon": 34.367874,
          "lon__1": 35.845667
        },
        {
          "name": "Btouratij playground",
          "lon": 34.363975,
          "lon__1": 35.842793
        },
        {
          "name": "Btouratij statue",
          "lon": "",
          "lon__1": ""
        },
        {
          "name": "Al chami station",
          "lon": 34.354614,
          "lon__1": 35.835442
        },
        {
          "name": "Aaba",
          "lon": 34.350042,
          "lon__1": 35.834881
        },
        {
          "name": "Al koura hospital",
          "lon": 34.348411,
          "lon__1": 35.837959
        }
      ]
      const trips={
        "message": "Trip list retrieved",
        "data": [
          {
            "_id": "647ccfc4a5969f3956fdb0b6",
            "scheduleId": {
              "_id": "647ccf81a5969f3956fdb0ae",
              "startLocation": "Tripoli",
              "endLocation": "Aaba",
              "startTime": "1999-06-02T04:15:00.000Z",
              "endTime": "1999-06-02T04:50:00.000Z",
              "days": [
                "[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\"]"
              ],
              "defaultDriverId": "647ccbfb904819a15d6c4252",
              "defaultBusId": {
                "_id": "647cccd3593945546e80cbc4",
                "name": "A13",
                "capacity": 33
              },
              "lineId": {
                "_id": "647cce6aa5969f3956fdb0a9",
                "name": "Tripoli/Aaba",
                "duration": "45",
                "price": 40,
                "busStops": [
                  {
                    "name": "Sehet Nour",
                    "lon": 32.8373,
                    "lat": 37.8474,
                    "_id": "647cce6aa5969f3956fdb0aa"
                  }
                ],
                "__v": 0
              },
              "__v": 0
            },
            "totalPassenger": 0,
            "emptySeats": 30,
            "date": "2023-06-05T04:15:00.907Z",
            "lon": {
              "$numberDecimal": "35.8408729"
            },
            "lat": {
              "$numberDecimal": "34.4022274"
            },
            "bookedPassengers": [
              {
                "passengerId": "647ccb8594dc5960d4355719",
                "status": "approved",
                "_id": "647d9218bf6732ff50da48b3"
              }
            ],
            "busId": {
              "_id": "647cccd3593945546e80cbc4",
              "name": "A13",
              "capacity": 33
            },
            "tripStatus": "departed",
            "busStatus": "good",
            "message": "The trip is scheduled",
            "startTime": "2023-06-05T04:15:00.907Z",
            "endTime": "2023-06-05T04:50:00.907Z",
            "busManagerId": {
              "_id": "647ccbfb904819a15d6c4252",
              "firstName": "Joelle",
              "lastName": "Mostafa",
              "phone": 76577232,
              "password": "$2a$10$LNUXJMhJlrz0tDHxBrnc5u6pvj.TQtnge8rE.7hp0atjV9gr0ADLi",
              "role": "manager",
              "__v": 0
            },
            "__v": 0
          },
          {
            "_id": "647ccfc4a5969f3956fdb0b7",
            "scheduleId": {
              "_id": "647ccfb9a5969f3956fdb0b0",
              "startLocation": "Aaba",
              "endLocation": "Tripoli",
              "startTime": "1999-06-02T05:15:00.000Z",
              "endTime": "1999-06-02T05:50:00.000Z",
              "days": [
                "[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\"]"
              ],
              "defaultDriverId": "647ccbfb904819a15d6c4252",
              "defaultBusId": {
                "_id": "647cccd3593945546e80cbc4",
                "name": "A13",
                "capacity": 33
              },
              "lineId": {
                "_id": "647cce6aa5969f3956fdb0a9",
                "name": "Tripoli/Aaba",
                "duration": "45",
                "price": 40,
                "busStops": [
                  {
                    "name": "Sehet Nour",
                    "lon": 32.8373,
                    "lat": 37.8474,
                    "_id": "647cce6aa5969f3956fdb0aa"
                  }
                ],
                "__v": 0
              },
              "__v": 0
            },
            "totalPassenger": 0,
            "emptySeats": 30,
            "date": "2023-06-05T05:15:00.919Z",
            "lon": {
              "$numberDecimal": "33.2211"
            },
            "lat": {
              "$numberDecimal": "33.0154"
            },
            "bookedPassengers": [],
            "busId": {
              "_id": "647cccd3593945546e80cbc4",
              "name": "A13",
              "capacity": 33
            },
            "tripStatus": "scheduled",
            "busStatus": "N/A",
            "message": "The trip is scheduled",
            "startTime": "2023-06-05T05:15:00.919Z",
            "endTime": "2023-06-05T05:50:00.919Z",
            "busManagerId": {
              "_id": "647ccbfb904819a15d6c4252",
              "firstName": "Joelle",
              "lastName": "Mostafa",
              "phone": 76577232,
              "password": "$2a$10$LNUXJMhJlrz0tDHxBrnc5u6pvj.TQtnge8rE.7hp0atjV9gr0ADLi",
              "role": "manager",
              "__v": 0
            },
            "__v": 0
          }
        ]
      }
      const batata={
        message: "Trip list retrieved",
        data: [
          {
            _id: "647ccfc4a5969f3956fdb0b6",
            scheduleId: {
              _id: "647ccf81a5969f3956fdb0ae",
              startLocation: "Tripoli",
              endLocation: "Aaba",
              startTime: "1999-06-02T04:15:00.000Z",
              endTime: "1999-06-02T04:50:00.000Z",
              days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
              defaultDriverId: "647ccbfb904819a15d6c4252",
              defaultBusId: {
                _id: "647cccd3593945546e80cbc4",
                name: "A13",
                capacity: 33
              },
              lineId: {
                _id: "647cce6aa5969f3956fdb0a9",
                name: "Tripoli/Aaba",
                duration: "45",
                price: 40,
                busStops: [
                  {
                    name: "Sehet Nour",
                    lon: 32.8373,
                    lat: 37.8474,
                    _id: "647cce6aa5969f3956fdb0aa"
                  }
                ],
                __v: 0
              },
              __v: 0
            },
            totalPassenger: 0,
            emptySeats: 30,
            date: "2023-06-05T04:15:00.907Z",
            lon: {
              $numberDecimal: "35.8408729"
            },
            lat: {
              $numberDecimal: "34.4022274"
            },
            bookedPassengers: [
              {
                passengerId: "647ccb8594dc5960d4355719",
                status: "approved",
                _id: "647d9218bf6732ff50da48b3"
              }
            ],
            busId: {
              _id: "647cccd3593945546e80cbc4",
              name: "A13",
              capacity: 33
            },
            tripStatus: "departed",
            busStatus: "good",
            message: "The trip is scheduled",
            startTime: "2023-06-05T04:15:00.907Z",
            endTime: "2023-06-05T04:50:00.907Z",
            busManagerId: {
              _id: "647ccbfb904819a15d6c4252",
              firstName: "Joelle",
              lastName: "Mostafa",
              phone: 76577232,
              password: "$2a$10$LNUXJMhJlrz0tDHxBrnc5u6pvj.TQtnge8rE.7hp0atjV9gr0ADLi",
              role: "manager",
              __v: 0
            },
            __v: 0
          }]}

      const [index,setIndex]=useState("0")
    return(
        <div className='mr-auto ml-auto w-100 '>
            <div style={{width:"100%"}} className="flex justify-between items-center gap-4 mb-4">
                <label>Select schedule:</label>
                <select onChange={(e)=> setIndex(e.target.value)}>
                    <option value="0">Tripoli - Aaba</option>
                    <option value="1">Aaba - Tripoli</option>
                </select></div>
       {index==="0"&& 
             <table style={{ borderCollapse: 'collapse', width: '100%' }}>
             <thead>
               <tr>
                 <th style={{ border: '1px solid #ddd', padding: '8px', color:"#f7f7f7", backgroundColor:"var(--green-d)" }}>#</th>
                 <th style={{ border: '1px solid #ddd', padding: '8px', color:"#f7f7f7", backgroundColor:"var(--green-d)" }}>Depart Time</th>
                 <th style={{ border: '1px solid #ddd', padding: '8px', color:"#f7f7f7", backgroundColor:"var(--green-d)" }}>Arrival Time</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>7:30</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>7:00</td>
               </tr>
               <tr>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>8:30</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>9:00</td>
               </tr>
               <tr>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>9:30</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>10:00</td>
               </tr>
               <tr>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>4</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>10:30</td>
                 <td style={{ border: '1px solid #ddd', padding: '8px' }}>11:00</td>
               </tr>
             </tbody>
           </table>}
        {index==="1"&& 
        
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #ddd', padding: '8px', color:"#f7f7f7", backgroundColor:"var(--green-d)" }}>#</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', color:"#f7f7f7", backgroundColor:"var(--green-d)" }}>Depart Time</th>
      <th style={{ border: '1px solid #ddd', padding: '8px', color:"#f7f7f7", backgroundColor:"var(--green-d)" }}>Arrival Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>7:15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>7:45</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>8:15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>8:45</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>9:15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>9:45</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>4</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10:15</td>
      <td style={{ border: '1px solid #ddd', padding: '8px' }}>10:45</td>
    </tr>
  </tbody>
</table>
}

        </div>
    )
}
export default Schedule