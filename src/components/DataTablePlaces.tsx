import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import apiConnection from "../api/apiConnection";
import { Place } from "../interfaces/interfacesPlaces";


export const DataTablePlaces = () => {
  const [ places , setPlaces] = useState<Place[]>([]);

  const columns = [
    { field: "id", header: "ID" },
    { field: "zona", header: "zona" },
    { field: "description", header: "Descripción" },
    { field: "position.lat", header: "Latitude" },
    { field: "position.lng", header: "Longitude" },
    { field: "venta", header: "Venta" },
  ];


   useEffect(() => {
     apiConnection.get("/places").then((response) => setPlaces(response.data));
   }, []);

   const dynamicColumns = columns.map((col, i) => {
     return <Column key={col.field} field={col.field} header={col.header} sortable/>;
   });

  return (
    <div className="datatable-wrap">
      <DataTable
        value={ places }
        sortField='zona'
        sortOrder={-1}
        responsiveLayout='scroll'
      >
        { dynamicColumns }
      </DataTable>
    </div>
  );
};
