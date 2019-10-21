import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Main = styled.div `
text-align: center;
`
const StyledLink = styled(Link)`
font-family: 'Lato', sans-serif;
font-size: 4rem;
font-weight: 800;
background-color: #3A405A;
color: #DE6e4B;
padding: 50px 100px;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 30px;
border-radius: 6px;
:hover{
  background-color: #DE6e4B;
  color: #3A405A;
}
`

export default function Home() {

  return (
    <section>
    <Main>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
    </Main>
    </section>
  );
}