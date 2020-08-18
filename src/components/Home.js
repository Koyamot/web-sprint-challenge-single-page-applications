  
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 1024px;
    height: 300px;
    background-image: url('https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-1.2.1');
    background-size: cover;
    overflow: hidden;
`;

const Btn = styled.div`
    width: 120px;
    height: 40px;
    border-radius: 4px;
    background-color: white;
    font-size: 12px;
    text-align: center;
    margin: 48px 24px 32px 24px;
`;

const Text = styled.p`
    text-decoration: none;
    padding-top: 10px;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.0rem;
    color: darkgreen;
`;

const Tagline = styled.h2`
    color: darkgreen;
    width: 400px;

`;


const Home = () => {

    return (
         <>
        <ImgContainer className="img-container">
        <Tagline>Get your 'Fancy Shmancy' pizzas!</Tagline>
        <Link to="/pizza" data-cy="order"><Btn><Text>Order Now!</Text></Btn></Link>
        </ImgContainer>
        </>

    );
}




export default Home