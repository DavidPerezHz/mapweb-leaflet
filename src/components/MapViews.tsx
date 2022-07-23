
import React from "react";
import { MapContainer, TileLayer, useMap, } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "./Markers";

const PLACES = [
  {
    nombre: "",
    description: "Hello, Welcome to Tabasco",
    position: {
      lat: 17.9509658,
      lng: -92.5588219,
    },
  },
  {
    nombre: "",
    description: "React JS",
    position: {
      lat: 20.6737919,
      lng: -103.3354131,
    },
  },
  {
    nombre: "",
    description: "HTML 5 DOM",
    position: {
      lat: 18.4499,
      lng: -98.231575,
    },
  },
  {
    nombre: "",
    description: "React - Native",
    position: {
      lat: 25.67507,
      lng: -100.31847,
    },
  },
  {
    nombre: "",
    description: "Lejos de casa",
    position: {
      lat: 29.1026,
      lng: -110.97732,
    },
  },
  {
    nombre: "",
    description: "Sin camino a casa",
    position: {
      lat: 19.70078,
      lng: -101.18443,
    },
  },
  {
    nombre: "",
    description: "Bievenido!!",
    position: {
      lat: 22.14982,
      lng: -100.97916,
    },
  },
  {
    nombre: "",
    description: "Code Dev",
    position: {
      lat: 19.35529,
      lng: -99.06224,
    },
  },
  {
    nombre: "",
    description: "Un contenido de indicador",
    position: {
      lat: 20.97537,
      lng: -89.61696,
    },
  },
  {
    nombre: "",
    description: "La paz - Baja California",
    position: {
      lat: 25.2578829,
      lng: -111.9214031,
    },
  },
];

export const MapViews = () => {

  const defaultProps = {
    center: {
      lat: 20.6737919,
      lng: -103.3354131,
    },
    zoom: 5,
  };

  return (
    <MapContainer
      center={ defaultProps.center }
      zoom={ defaultProps.zoom }
      scrollWheelZoom={false}
      id='map'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        // --- (7) Alternative map style (attribution and url copied from the leaflet extras website) ---
        // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        // --- -------------------------------------------------------------------------------------- ---
      />
      <Markers places={ PLACES } />
      
    </MapContainer>
  );
};
