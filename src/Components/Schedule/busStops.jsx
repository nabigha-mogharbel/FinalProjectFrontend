import { useEffect, useState, useRef, useMemo, useContext } from "react";
import L, { LatLng } from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import throttle from "lodash/throttle";
import { TokenContext, ColorPallete } from "../../context";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Tooltip,
} from "react-leaflet";
function Schedule() {
  const mapContainerStyle = {
    width: "90vw",
    height: "60vh",
  };
  const customIcon = new L.Icon({
    iconUrl: require("../../Images/icon.png"),
    iconSize: [25, 40], // Adjust the size of the icon
  });

  const ballouta = [
    {
      name: "Al Nour square, next to connexion",
      lon: 34.434422,
      lon__1: 35.835748,
    },
    {
      name: "Next to KFC",
      lon: 34.429578,
      lon__1: 35.834363,
    },
    {
      name: "Next to Honda",
      lon: 34.426222,
      lon__1: 35.833121,
    },
    {
      name: "Bahsas square",
      lon: 34.421063,
      lon__1: 35.830471,
    },
    {
      name: "Zaarour bakery",
      lon: 34.41934,
      lon__1: 35.829884,
    },
    {
      name: "Lebanese university",
      lon: 34.41514,
      lon__1: 35.831795,
    },
    {
      name: "Haykal Hospital",
      lon: 34.412353,
      lon__1: 35.831736,
    },
    {
      name: "LIT",
      lon: 34.409465,
      lon__1: 35.831346,
    },
    {
      name: "Faculty of law",
      lon: 34.410354,
      lon__1: 35.834335,
    },
    {
      name: "HOZ mall",
      lon: 34.401896,
      lon__1: 35.839006,
    },
    {
      name: "Bloom outlet",
      lon: 34.399502,
      lon__1: 35.840213,
    },
    {
      name: "LIU",
      lon: 34.396566,
      lon__1: 35.841806,
    },
    {
      name: "New makhfar",
      lon: 34.390083,
      lon__1: 35.8463,
    },
    {
      name: "Snack Abboud",
      lon: 34.386067,
      lon__1: 35.847123,
    },
    {
      name: "Khan Al Saboun",
      lon: 34.383368,
      lon__1: 35.847502,
    },

    {
      name: "Nakhle/Aazariyeh",
      lon: 34.377351,
      lon__1: 35.847077,
    },
    {
      name: "Actel school",
      lon: 34.373585,
      lon__1: 35.846185,
    },
    {
      name: "Kfar Qahel",
      lon: 34.367874,
      lon__1: 35.845667,
    },
    {
      name: "Btouratij playground",
      lon: 34.363975,
      lon__1: 35.842793,
    },
    {
      name: "Btouratij statue",
      lon: "",
      lon__1: "",
    },
    {
      name: "Al chami station",
      lon: 34.354614,
      lon__1: 35.835442,
    },
    {
      name: "Aaba",
      lon: 34.350042,
      lon__1: 35.834881,
    },
    {
      name: "Al koura hospital",
      lon: 34.348411,
      lon__1: 35.837959,
    },
  ];
  const [initialValues, setInitialValues] = useState({
    zoom: 15,
    center: [34.43431, 35.835937],
    scrollWheelZoom: true,
  });
  return (
    <MapContainer style={mapContainerStyle} {...initialValues}>
      {ballouta.map((e) => {
        return (
          <Marker icon={customIcon} position={[e.lon, e.lon__1]}>
            <Tooltip>{e.name}</Tooltip>
          </Marker>
        );
      })}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
export default Schedule;
