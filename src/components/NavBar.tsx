
import React from "react";
import { IoIosNavigate, IoMdHome } from "react-icons/io";
import {  NavLink, Route, Routes, useLocation } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { MapScreen } from "../screens/MapScreen";



export const NavBar = () => {

  return (
    <>
      <div className='containerMenu'>
        <nav className='nav-menu'>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <IoMdHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Map'
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <IoIosNavigate />
                <span>Map</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={ <HomeScreen /> } />
          <Route path='/Map' element={ <MapScreen /> } />
        </Routes>
      </div>
    </>
  );
};