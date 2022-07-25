import React, { useEffect, useState } from "react";
import { IoIosThermometer } from "react-icons/io";
import apiWeather from "../api/apiWeather";
import { PropWeather } from "../interfaces/interfacesPlaces";


export const Weather = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<PropWeather>({
    city: "",
    temp: 0,
    humidity: 0
  });

  useEffect(() => {
    getTemperature();
  }, []);

  const getTemperature = async () => {
    await apiWeather.get("").then((response) => {
      const {
        name: city,
        main: { temp, humidity },
      } = response.data;

      setWeather({
        city,
        temp: temp,
        humidity,
        description: response.data.weather[0].description,
      });

      setCity(city);
      setIsLoading(true);
    });
  };

  let k = weather.temp;
  let C = k - 273.15;
  

  return (
    <div className='container-wheather'>
      {
        !isLoading ? (
          <h4 className='title'>
            Cargando temperatura...
          </h4>
        ): (
        <>
          <h4 className='title'>
            <IoIosThermometer size={24} color="#444" />
            Temperatura para <span>{ city }</span>
          </h4>
          <div className='content'>
            <div className='item-wheater'>
              <b>Temperature:</b>
              <span>{ C.toFixed(2) } &#8451;</span>
            </div>
            <div className='item-wheater'>
              <b>Humidity:</b>
              <span>{ weather.humidity } %</span>
            </div>
            <div className='item-wheater'>
              <b>Weather:</b>
              <span>{ weather.description }</span>
            </div>
          </div>
        </>
        )
      }
    </div>
  );
};
