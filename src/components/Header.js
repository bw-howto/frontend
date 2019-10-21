import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: white;
  background: #DE6E4B;
  padding: 20px;
`;

const TitleLink = styled(Link)`
  font-size: 3rem;
  text-align: center;
  color: white;
  background: #DE6E4B;
  padding: 20px;
  text-decoration: none;
`;

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
          <TitleLink to ="/">How To Life Hacks</TitleLink>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/register">Register</HeaderLink>
          <HeaderLink to="/logout">Log Out</HeaderLink>
      </Title>
    </header>
  );
}