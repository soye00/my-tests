import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import Reviews from "../components/Reviews.jsx";
import AirTable from "../components/AirTable.jsx";
import {CustomOverlayMap, Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";
import {fetchCities} from "../../api/supadb.js";
import {fetchAqi} from "../../api/airapi.js";

function RootPage(props) {
    const [cities, setCities] = useState([]);
    const [aqiInfo, setAqiInfo] = useState({});
    const [city, setCity] = useState(null);
    const [hoveredCity, setHoveredCity] = useState(null);

    useKakaoLoader({
        appkey: '79f216710859bc2ebef6080c725aa960',
        libraries: ["clusterer", "services", "drawing"]
    });

    useEffect(() => {
        fetchCities().then((data) => {
            setCities(data);
        });
    }, []);

    const clickAqi = (city) => {
        fetchAqi(city.latitude, city.longitude).then(data => {
            setAqiInfo(data);
        });
    };

    return (
        <div>
            <h1>RootPage</h1>
            <Map center={{lat: 35.8714, lng: 128.6014}}
                 level={8}
                 style={{width: '100%', height: '80vh'}}
            >
                {cities.map((city) => (
                    <MapMarker
                        key={city.id}
                        position={{lat: city.latitude, lng: city.longitude}}
                        onClick={() => {
                            clickAqi(city);
                            setCity(city);
                        }}
                        onMouseOut={() =>{
                            setHoveredCity(null);
                        }}
                        onMouseOver={() => {
                            setHoveredCity(city);
                        }}
                    ></MapMarker>
                ))}
                {
                    hoveredCity && <CustomOverlayMap
                        position={{lat:hoveredCity.latitude, lng:hoveredCity.longitude}}>
                        <div
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "rgba(255,255,255,0.9)",
                                borderRadius: "4px",
                                fontSize: "1rem",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                                whiteSpace: "nowrap",
                            }}
                        >{hoveredCity.name}</div>
                    </CustomOverlayMap>
                }
            </Map>
            <Reviews city={city} aqi={aqiInfo.aqi}></Reviews>
            <AirTable {...aqiInfo}></AirTable>

        </div>
    );
}

export default RootPage;