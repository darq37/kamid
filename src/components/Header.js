import React from 'react';
import logo from '../transparent-logo.png';
import './header.css';


function Header(props) {
    return (
        <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="title">Kamid</p>
                <button className="menu-button">POMOC</button>
                <button className="menu-button">OFERTA</button>
                <p className="contact">Kontakt</p>
            <p className="contact-2">81 746 85 70</p>

        </div>
    );
}

export default Header;
