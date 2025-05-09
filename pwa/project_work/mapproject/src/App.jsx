import {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";
import { Bar, Line, Pie } from '@ant-design/plots';
import { XFilled } from '@ant-design/icons';



function App() {
  const [cities, setCities] = useState([]);
  const [aqiInfo, setAqiInfo] = useState({});

  useKakaoLoader({
      appkey : '79f216710859bc2ebef6080c725aa960',
      libraries: ["clusterer", "services", "drawing"]
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

  const config = {
    data : [
      {x: '2025-05-01', y:10},
      {x: '2025-05-02', y:20},
      {x: '2025-05-03', y:50},
      {x: '2025-05-04', y:40},
      {x: '2025-05-05', y:20},
    ],
    xField: 'x',
    yField: 'y',

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
      <AirTable {...aqiInfo}></AirTable>
      <Line data={config.data} xField={config.xField} yField={config.yField}></Line>
      <Bar data={config.data} xField={config.xField} yField={config.yField}></Bar>
      


    </>
  )
}

export default App
