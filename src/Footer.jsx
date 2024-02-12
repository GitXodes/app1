import React from 'react';
import './Footer.css';
const Footer = ({rotation}) => {
    return (
        <div id={'rt'}>
            <div className="foot" style={{transform: `rotate(${rotation}deg)`}}>Home</div>
            <div className="foot" style={{transform: `rotate(${rotation}deg)`}}>Join</div>
            <div className="foot" style={{transform: `rotate(${rotation}deg)`}}>About</div>
        </div>
    );
};

export default Footer;