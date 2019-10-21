import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Main = styled.div `
text-align: center;
`
const StyledLink = styled(Link) `
background-color: #3A405A;
color: #DE6e4B;
padding: 50px 100px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 30px;
font-size: 30px;
:hover{
  background-color: #A9F3FD;
}
`

export default function Home() {


// setInterval(randomGenerator, 3000);

  return (
    <section>
    <Main>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
    </Main>
    </section>
  );
}