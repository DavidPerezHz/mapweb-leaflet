import React from "react";
import { Marker, Popup } from "react-leaflet";
import { PropsPlaces } from "../interfaces/interfacesPlaces";
import { IconLocation } from "./IconLocation";
import currencyFormatter from "currency-formatter";
import { IoIosInformationCircleOutline } from "react-icons/io";


export const Markers = ( { places }: PropsPlaces ) => {

  const currentFormat = (value:number = 0) => {
    return currencyFormatter.format(value, { code: "MXN" });
  }

  return (
    <>
      {places.map((place, idx) => (
        <Marker  key={ idx } position={place.position} icon={IconLocation}>
          <Popup>
            <div style={{ 
              display: "flex",
              alignItems: 'center',
            }}>
              <b>INFORMACIÓN:</b>
              <IoIosInformationCircleOutline size={20} style={{ marginLeft: 5, marginBottom: 1 }} />
            </div>
            <div className="markerDescription">
              <span>
                <b> { 'ID:' } </b> <span>{ place.id }</span>
              </span>
              <span>
                <b> { 'Description:' } </b> <span>{ place.description }</span>
              </span>
              <span>
                <b> { 'Zona:' } </b> <span>{ place.zona }</span>
              </span>
              <span>
                <b> { 'Venta:' } </b> <span>{ currentFormat(place.venta) }</span>
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
