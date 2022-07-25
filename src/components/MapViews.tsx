
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "./Markers";
import { Place } from "../interfaces/interfacesPlaces";
import { useLocation } from "react-router-dom";

import { createBrowserHistory } from "history";

import apiConnection from "../api/apiConnection";


// const PLACES: Place[] = [
//   {
//     id: 10,
//     nombre: "",
//     description: "Hello, Welcome to Tabasco",
//     position: {
//       lat: 17.9509658,
//       lng: -92.5588219,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "React JS",
//     position: {
//       lat: 20.6737919,
//       lng: -103.3354131,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "HTML 5 DOM",
//     position: {
//       lat: 18.4499,
//       lng: -98.231575,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "React - Native",
//     position: {
//       lat: 25.67507,
//       lng: -100.31847,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "Lejos de casa",
//     position: {
//       lat: 29.1026,
//       lng: -110.97732,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "Sin camino a casa",
//     position: {
//       lat: 19.70078,
//       lng: -101.18443,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "Bievenido!!",
//     position: {
//       lat: 22.14982,
//       lng: -100.97916,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "Code Dev",
//     position: {
//       lat: 19.35529,
//       lng: -99.06224,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "Un contenido de indicador",
//     position: {
//       lat: 20.97537,
//       lng: -89.61696,
//     },
//   },
//   {
//     id: 10,
//     nombre: "",
//     description: "La paz - Baja California",
//     position: {
//       lat: 25.2578829,
//       lng: -111.9214031,
//     },
//   },
// ];


interface PropsState {
  currentLocation: {
    lat: number;
    lng: number;
  };
  zoom: number;
} 

export const MapViews = () => {
  // const history = createBrowserHistory({ window });

  const location: any = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [places, setPlaces] = useState<Place[]>([]);
  const [stateCurrent, setStateCurrent] = useState<PropsState>({
    currentLocation: {
      lat: 20.6737919,
      lng: -103.3354131,
    },
    zoom: 6,
  });

  useEffect(() => {
    getPlaces();
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      if (location.state?.latitude && location.state?.longitude)
        setCurrentLocation();
    }, 1000);
    
  }, [ location ]);

  const setCurrentLocation = () => {
    const currentLocation = {
      lat: location.state.latitude,
      lng: location.state.longitude,
    };

    setStateCurrent({
      ...stateCurrent,
      currentLocation,
      zoom: 15,
    });
    console.log(stateCurrent);
    // history.replace({ pathname: "/map" }, {});
  };

  const getPlaces = async () => {
    await apiConnection.get("/places").then(function (response) {
      setPlaces([...places, ...response.data]);
    });
    setIsLoading(true);
  };

  return (
    <MapContainer
      center={ stateCurrent.currentLocation }
      zoom={ stateCurrent.zoom }
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
       {
        isLoading && (
          <Markers places={places} />
        )
       }
    </MapContainer>
  );
};
