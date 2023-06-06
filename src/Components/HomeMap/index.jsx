import 'leaflet/dist/leaflet.css'
import React from 'react'
import data from "../../vars/Unnamed_Route.gpx"
import { MapContainer, Polyline, TileLayer } from 'react-leaflet'
import GPXParser from 'gpxparser';
const GpxMap = () => {
    let parser = new GPXParser()
parser.parse("../../vars/Unnamed_Route.gpx")
const waypoints = parser.waypoints;
const tracks = parser.tracks;

console.log('Waypoints:', waypoints);
console.log('Tracks:', tracks);

// console.log(parser.tracks[0].waypoints[0].lat)
// 	const positions = parser.tracks[0].points.map(p => [p.lat, p.lon])
	return (<>hhaa</>
	// <MapContainer
	// 		// for simplicty set center to first gpx point
	//         center={positions[0]}
	//         zoom={9}
	//         scrollWheelZoom={false}
	//       >
	//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //         <Polyline
	//             pathOptions={{ fillColor: 'red', color: 'blue' }}
	//             positions={positions}
    //         />
	// </MapContainer>
	
	)
}
export default  GpxMap
