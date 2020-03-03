import React from 'react';
import logo from '../../transparent-logo.png';
import './header.css';
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to={"/"}><img src={logo} className="App-logo" alt="logo"/></Link>
            <p className="title">F.P.H. KAMID</p>
            <Link to={"/contact"}>
                <button className="menu-button">Kontakt</button>
            </Link>
            <Link to={"/about"}>
                <button className="menu-button">O NAS</button>
            </Link>
            <button className="menu-button">OFERTA</button>
            <p className="call">ZADZWOŃ</p>
            <p className="callNumber">81 746 85 70</p>
        </div>
    );
}

export default Header;
