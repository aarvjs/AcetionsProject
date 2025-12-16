import React from 'react';
import './index.css';
const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="contact-info">
                    <div className="item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <span>ADDRESS</span>
                            <p>123/456-789, Factory Area, Kanpur, Uttar Pradesh, INDIA</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <span>EMAIL US</span>
                            <p>info@mehragroup.com</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="fas fa-phone-alt"></i>
                        <div>
                            <span>CALL US</span>
                            <p>+91-9876543210</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
