import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
display: block;
min-width: 100%;
height: 134px;
background-color: #806BFF;
`

// const Img = styled.img`
// padding-left: 20px;
// padding-top: 20px;
// `

export default () => {
    return (
        <Header>
            <Link to='/'><img src='/logo.png' /></Link>
        </Header>
    );
}