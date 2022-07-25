import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import apiConnection from "../api/apiConnection";
import { PropVentas } from "../interfaces/interfacesPlaces";
import currencyFormatter from 'currency-formatter';


interface PropsVenta {
  y: number,
  name: string,
  total: number,
  color?: string
}

export const Chart = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [dataVenta, setDataVenta] = useState<PropsVenta[]>([
    {
      y: 100,
      color: "#F7464A",
      name: "Google",
      total: 0,
    },
  ]);
  
  useEffect(() => {
    getPlacesVentas();
  }, [ ]);
  
  const getPlacesVentas = async () => {
    await apiConnection.get<PropVentas[]>("/ventas").then(function (response) {      
      const newventa = [...response.data].map((venta) => { 
        
        return {
          y: venta.total / 100,
          name: venta.zona,
          total: venta.total
        }
      });

      setDataVenta([ ...newventa ]);
      setIsLoading(true);
    });
  }

  const options = {
    title: {
      text: "Ventas por Zona",
    },
    chart: {
      plotBackgroundColor: "white",
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: (9 / 16) * 100 + "%",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    // legend: {
    //   align: "left",
    //   verticalAlign: "top",
    //   layout: "vertical",
    //   x: 0,
    //   y: 250,
    // },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format:
            "<b>{point.name}</b>: {point.percentage:.1f}%",
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Venta",
        colorByPoint: true,
        color: "#006600",
        lineWidth: 1,
        // marker: {
        //   enabled: false,
        //   symbol: "circle",
        //   radius: 3,
        //   states: {
        //     hover: {
        //       enabled: true,
        //       lineWidth: 1,
        //     },
        //   },
        // },
        data: dataVenta,
      },
    ],
  }

  const currentFormat = (value: number = 0) => {
    return currencyFormatter.format(value, { code: "MXN" });
  }

  return (
    <div className="chartPie">
      {
        !isLoading && (
          <div>Cargando Chart....</div>
        )
      }
      <PieChart highcharts={Highcharts} options={options} />
      <div className="infoZona">
        <h2>Venta total por zona</h2>
        <div className="zona">
          {
            dataVenta.map((venta, key) => (
              <span key={key}><b>{ venta.name }:</b>{ currentFormat(venta.total) }</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};
