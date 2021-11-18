import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
display: flex;
min-width: 100%;
height: 134px;
background-color: #806BFF;
`
export default () => {
    return (
        <Header>
            <Link to='/'><img src='./logo.png' /></Link>
        </Header>
    );
}