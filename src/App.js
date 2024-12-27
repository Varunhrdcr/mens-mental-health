import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NearbySearch from './components/NearbySearch';
import Trips from './components/Trips';
import RaiseFunds from './components/RaiseFunds';
import Feedback from './components/Feedback';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/nearby" element={<NearbySearch />} />
                    <Route path="/trips" element={<Trips />} />
                    <Route path="/funds" element={<RaiseFunds />} />
                    <Route path="/feedback" element={<Feedback />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;