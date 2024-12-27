import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct


const Navbar = () => {
    return (
        <nav>
            <h1>Men's Mental Health</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/nearby">Nearby Search</Link></li>
                <li><Link to="/trips">Trips</Link></li>
                <li><Link to="/funds">Initiate/Raise Funds</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;