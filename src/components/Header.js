import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: space-around;
  background: #DE6E4B;
  align-items: center;
`;

const Links =styled.div`
text-align: center;
`

const TitleLink = styled(Link)`
  font-size: 6rem;
  text-align: center;
  color: white;
  background: #DE6E4B;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
`;
const Light =styled.span`
font-style: italic;
font-weight: 100;
`

const HeaderLink = styled(Link) `
color: #353238;
padding: 14px 25px;
margin-left: 30px;
text-align: center;
text-decoration: none;
display: inline-block;
:hover{
}
`

export default function Header() {
  return (
    <header className="ui centered">
      <Title>
          <TitleLink to ="/">How To <Light>Life Hacks</Light></TitleLink>
          <Links>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/register">Register</HeaderLink>
          <HeaderLink to="/logout">Log Out</HeaderLink>
          </Links>
      </Title>
    </header>
  );
}