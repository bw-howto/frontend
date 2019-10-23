import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TweenMax from "gsap/TweenMax";

const Main = styled.div`
	text-align: center;
`;
const StyledLink = styled(Link)`
	font-family: "Lato", sans-serif;
	font-size: 4rem;
	font-weight: 800;
	background-color: #3a405a;
	color: #de6e4b;
	padding: 50px 100px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	margin: 30px;
	border-radius: 6px;
	:hover {
		background-color: #de6e4b;
		color: #3a405a;
	}
	-webkit-animation: fadein 3s, scale 2s;

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes scale {
		0% {
			transform: scale(0.6, 0.6);
		}
		80% {
			transform: scale(1.02, 1.02);
		}
		100% {
			transform: scale(1, 1);
		}
	}
`;

TweenMax.to(".test", 3, { x: 100 });

export default function LandingPage() {
	return (
		<section>
			<Main>
				<StyledLink to="/login">Login</StyledLink>
				<StyledLink to="/register">Register</StyledLink>
			</Main>
		</section>
	);
}
