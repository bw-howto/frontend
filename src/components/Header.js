import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Title = styled.h1`
	display: flex;
	justify-content: space-around;
	background: #de6e4b;
	align-items: center;
`;

const Links = styled.div`
	text-align: center;
`;

const TitleLink = styled(Link)`
	font-size: 6rem;
	text-align: center;
	color: white;
	background: #de6e4b;
	text-decoration: none;
	font-family: "Lato", sans-serif;
`;
const Light = styled.span`
	font-style: italic;
	font-weight: 100;
`;

const HeaderLink = styled(Link)`
	color: #353238;
	padding: 14px 25px;
	margin-left: 30px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	:hover {
	}
`;

export default function Header() {
	if (localStorage.token) {
		return (
			<header className="ui centered">
				<Title>
					<TitleLink to="/">
						How To <Light>Life Hacks</Light>
					</TitleLink>
					<Links>
						<HeaderLink to="/top-posts">Top Posts</HeaderLink>
						<HeaderLink to="/my-posts">My Posts</HeaderLink>
						<HeaderLink to="/create-posts">Create</HeaderLink>
						<HeaderLink to="/logout">Log Out</HeaderLink>
						<Search />
					</Links>
				</Title>
			</header>
		);
	} else {
		return (
			<header className="ui centered">
				<Title>
					<TitleLink to="/">
						How To <Light>Life Hacks</Light>
					</TitleLink>
					<Links>
						<HeaderLink to="/login">Login</HeaderLink>
						<HeaderLink to="/register">Register</HeaderLink>
					</Links>
				</Title>
			</header>
		);
	}
}
