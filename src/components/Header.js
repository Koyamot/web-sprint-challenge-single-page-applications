import React from 'react';
import styled from "styled-components";
import pizza from "./Assets/Pizza.jpg"

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;

const H1 = styled.h1`
    margin-left 24px;

`;

const Nav = styled.div`
    margin-right: 24px;
`;

const A = styled.a`
    text-decoration: none;
    margin: 0 8px;
`;


const Header = () => {


return (
    <>
    <Head className="Header">
        <H1>Lambda Eats</H1>
        <Nav className="Nav">
        <A href="#">Home</A>
        <A href="#">Help</A> 
        </Nav>
    </Head>  
    <img src={pizza} alt='Pizza'/>
    </>  
);    

};

export default Header;
