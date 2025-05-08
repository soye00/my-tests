import {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {Card, message, Space} from "antd";
import axios from "axios";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [cities, setCities] = useState([]);
  const [aqiInfo, setAqiInfo] = useState({});

  useKakaoLoader({
      appkey : '79f216710859bc2ebef6080c725aa960',
  })

  // supabase 에서 cities 데이터 가져오기
  useEffect(() => {
      fetchCities().then(data => {
          // console.log(data);
          setCities(data);
      });

  },[])

  const clickAqi = (city) =>{
    console.log(city);
    fetchAqi(city.latitude, city.longitude).then(data => {
        setAqiInfo(data);
    });
  }

  return (
    <>
      <h1>Hello</h1>
      <Map center={{lat: 35.8714, lng: 128.6014}} level={8}
           style={{width:'100%', height:'80vh'}}>
          {cities.map((city) => (
              <MapMarker key={city.id}
              position={{lat:city.latitude,lng:city.longitude}}
              onClick={() =>{clickAqi(city)}}>
              </MapMarker>
          ))}
      </Map>
      <AirTable aqiInfo={aqiInfo}></AirTable>


    </>
  )
}

export default App
