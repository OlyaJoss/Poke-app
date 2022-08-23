import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const headerStyles = {
    'display': 'block',
    'min-width': '100%',
    'height': '134px',
    'background-color': '#806BFF',
}

const logoStyles = {
'padding': '20px',
}

// const Img = styled.img`
// : 20px;
// padding-top: 20px;
// `

export default () => {
    return (
        <header style={headerStyles}>
            <Link to='/'><img src={logo} style={logoStyles}/></Link>
        </header>
    );
}