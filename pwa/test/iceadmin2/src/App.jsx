import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reservation from './pages/Reservation.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Reservation />} />
            </Routes>
        </Router>
    );
}

export default App;