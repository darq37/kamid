import React from 'react';
import logo from '../../transparent-logo.png';
import './header.css';
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <Link to={"/"} className="left">
                <img src={logo} className="App-logo" alt="logo"/>
            </Link>
            <p className="title">F.P.H. KAMID</p>
            <Link to={"/contact"} className="mid-left">
                <button className="button">Kontakt</button>
            </Link>
            <Link to={"/about"} className="mid-right">
                <button className="button">O NAS</button>
            </Link>
            <p className="call">ZADZWOŃ</p>
            <p className="callNumber">81 746 85 70</p>
        </div>
    );
}

export default Header;
