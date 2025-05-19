import React from 'react';
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";

function App() {
    useKakaoLoader({
        appkey:'79f216710859bc2ebef6080c725aa960'
    })

    return (
        <div>
            <Map
                center={{lat:33.5564, lng:126.7981}}
                style={{width:'100%',height:'360px'}}
                level={3}
            >
                <MapMarker
                    position={{lat:33.5564, lng:126.7981}}
                    image={{src:'/aa.jpg', size:{width:30, height:40}}}
                >좌표설정
                </MapMarker>

            </Map>

        </div>
    );
}

export default App;