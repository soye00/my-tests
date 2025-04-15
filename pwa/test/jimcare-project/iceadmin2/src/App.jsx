import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationManage from './pages/ReservationManage';
import 'antd/dist/reset.css';


const App = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.head.appendChild(script);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ReservationManage />} />
            </Routes>
        </Router>
    );
};

export default App;