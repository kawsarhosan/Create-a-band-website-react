import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="navbar">
                <div className="logo">
                    <h1>BandMama</h1>
                </div>
                <div className="menubar">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/band">Band</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            
        
            </div>
            <div className='hero-section'>
                <h2>Create a band with you favourite artist!!!</h2>
                <h3>Budget: $200000</h3>
            </div>
        </div>
    );
};

export default Header;