import React from 'react';
import '../App.css';
import Header from "./Header";

function Layout(props) {
    return (
        <div>
            <Header></Header>
            {props.children}
        </div>
    );
}

export default Layout;
