import React from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";


interface Place {
  nombre: string;
  description: string
  position: {
    lat: number;
    lng: number;
  };
}

interface PropsPlaces {
  places: Place[]
}

export const Markers = ( { places }: PropsPlaces ) => {
  return (
    <>
      {places.map((place) => (
        <Marker position={place.position} icon={IconLocation}>
          <Popup>
            {
              place.description
            }
          </Popup>
        </Marker>
      ))}
    </>
  );
};
