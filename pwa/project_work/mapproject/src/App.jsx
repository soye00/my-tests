import { useState } from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {message} from "antd";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)
    const [cities, setCities] = useState([
        { id:1, name: "대구", lat: 35.8714, lng: 128.6014 }, // 대구 전체
        { id:2, name: "달서구", lat: 35.8296, lng: 128.5328 }, // 달서구
        { id:3, name: "중구", lat: 35.8693, lng: 128.6062 }, // 중구
        { id:4, name: "남구", lat: 35.8467, lng: 128.5971 }, // 남구
        { id:5, name: "동구", lat: 35.8867, lng: 128.6350 }, // 동구
        { id:6, name: "수성구", lat: 35.8588, lng: 128.6305 } // 수성구
    ]);

  useKakaoLoader({
      appkey : '79f216710859bc2ebef6080c725aa960',
  })

  const getAqi = () =>{

  }

  return (
    <>
      <h1>Hello</h1>
      <Map center={{lat: 35.8714, lng: 128.6014}} level={8}
           style={{width:'100%', height:'80vh'}}>
          {cities.map((city) => (
              <MapMarker key={city.id}
              position={{lat:city.lat,lng:city.lng}}
              onClick={getAqi}>
              </MapMarker>
          ))}
      </Map>

    </>
  )
}

export default App
