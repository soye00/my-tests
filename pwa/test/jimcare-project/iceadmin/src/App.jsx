import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservationManage from './pages/ReservationManage';
import 'antd/dist/reset.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ReservationManage />} />
            </Routes>
        </Router>
    );
};

export default App;