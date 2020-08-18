import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Form from "./components/Form";
import styled from "styled-components";
import Home from "./components/Home"
import "./App.css"

const APP = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    text-decoration: none;
`;

const H1 = styled.h1`
    color: darkgreen;
    margin-bottom: 0;
    margin-left: 16px;
    margin-top: 8px;

`;

const Nav = styled.div`
    margin-right: 24px;
`;

const A = styled.a`
    text-decoration: none;
    margin: 0 16px;
    color: darkgreen;
`;


const App = () => {
  return (
    
    <APP className='app-container'>
        <Head className="Header">
          <H1>Fancy Shmancy Pizza</H1>
          <Nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/pizza">F.S. Pizza</Link>
          <A href="#">Help</A> 
          </Nav>
      </Head>
      <div>
      <Switch>
        <Route path="/pizza" component={Form}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>

    </APP>
  );
};
export default App;
