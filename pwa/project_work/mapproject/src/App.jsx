import React, {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import { Button, Drawer, Radio, Space } from 'antd';
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Menu from "./components/Menu.jsx";



function App() {







  return (
    <>
        <Menu></Menu>
        <Routes>
            <Route path="/" element={<RootPage/>}></Route>
            <Route path="/user" element={<UserPage/>}></Route>
        </Routes>






    </>
  )
}

export default App
