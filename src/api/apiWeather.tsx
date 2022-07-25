import axios from 'axios';


const API_KEY = "f3d9f4e9ae28de56227b43b4469cd3e5";
let LAT = 20.6737919,
  LON = -103.3354111;

const apiWeather = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`,
});


export default apiWeather;