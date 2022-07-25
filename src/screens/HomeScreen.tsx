import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart } from "../components/Chart";
import { IoIosMap, IoIosNavigate } from "react-icons/io";
import { DataTablePlaces } from "../components/DataTablePlaces";

export const HomeScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  
  const [state, setState] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( 
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setIsLoading(true)
      }, 
      (error) =>{ console.log({error}); },
      {
        enableHighAccuracy: true
      }
    );
  }, [ ]);
  
  return (
    <div>
      <div className='containerGeolocation' hidden>
        <h1>Geolocación</h1>
        <p>
          <b>Longitude:</b> {state.longitude}{" "}
        </p>
        <p>
          <b>Latitude:</b> {state.latitude}{" "}
        </p>
        {isLoading && (
          <Link
            to={{ pathname: "/Map" }}
            state={state}
          >
            Ver mi locación
          </Link>
        )}
      </div>
      
      <Chart />
      <DataTablePlaces />
    </div>
  );
}
