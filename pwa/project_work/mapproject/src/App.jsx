import {useEffect, useState} from 'react'
import './App.css'
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../api/supadb.js";
import {fetchAqi} from "../api/airapi.js";
import AirTable from "./components/AirTable.jsx";
import { Bar, Line, Pie } from '@ant-design/plots';
import { XFilled } from '@ant-design/icons';
import MyChart from "./components/MyChart.jsx";
import { Button, Drawer, Radio, Space } from 'antd';
import Link from "antd/es/typography/Link.js";
import Reviews from "./components/Reviews.jsx";



function App() {
  const [cities, setCities] = useState([]);
  const [aqiInfo, setAqiInfo] = useState({});
  const [city,setCity] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = e => {
        setPlacement(e.target.value);
    };

  useKakaoLoader({
      appkey : '79f216710859bc2ebef6080c725aa960',
      libraries: ["clusterer", "services", "drawing"]
  })

  useEffect(() => {
      fetchCities().then((data)=> {
          setCities(data);
      });
  },[]);

  const clickAqi = (city) =>{
    fetchAqi(city.latitude, city.longitude).then(data => {
        setAqiInfo(data);
    });
  };



  return (
    <>
        <div style={{position: "absolute", top:'1rem', left:'1rem', zIndex:100}}>
            <Button type={"primary"} onClick={showDrawer}>menu</Button>
        </div>
      {/*<MyChart></MyChart>*/}
        <Drawer
            title="Basic Drawer"
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
        >
            <p><Link href={""}>Some contents...</Link></p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
      <Map center={{lat: 35.8714, lng: 128.6014}}
           level={8}
           style={{width:'100%', height:'80vh'}}
      >
          {cities.map((city) => (
              <MapMarker key={city.id}
              position={{lat:city.latitude,lng:city.longitude}}
              onClick={() =>{
                  clickAqi(city);
                  setCity(city);
              }}>
              </MapMarker>
          ))}
      </Map>
      <Reviews city={city}></Reviews>
      <AirTable {...aqiInfo}></AirTable>





    </>
  )
}

export default App
