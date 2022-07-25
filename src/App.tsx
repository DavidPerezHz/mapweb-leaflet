import React from 'react';
import './App.css';
import { MapViews } from "./components/MapViews";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Weather } from './components/Weather';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Weather />
    </BrowserRouter>
  );
}

export default App;
