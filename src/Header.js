import React from "react";
import styled from "styled-components";

const Header = styled.div`
display: flex;
min-width: 100%;
height: 134px;
background-color: #806BFF;
background-image: url('logo.png');
`
export default () => {
    return (
        <Header></Header>
    );
}