import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions";
import styled from "styled-components";


const Card = styled.div `
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
background: #F9DEC9;
border: 5px solid #3A405A;
transition: 0.3s;
width:  auto;
padding: 10px 20px 10px 20px;
margin: 20px;
:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const Title =styled.h1 `
margin: 0px;
font-size: 2.5rem;
color: #353238;
`

const Paragraph =styled.p `
padding: 5px;
font-size: 1.2rem;
text-align: left;
color: #353238;
`

const Button = styled.button`
font-family: 'Lato', sans-serif;
font-size: 1rem;
font-weight: 800;
background-color: #3A405A;
color: #DE6e4B;
padding: 2px 20px;
text-align: center;
text-decoration: none;
margin: 10px;
border-radius: 6px;
:hover{
  background-color: #DE6e4B;
  color: #3A405A;
}
`

function PostCard(props) {
	const deletePost = id => {
		props.deletePost(id);
	};
const [count, setCount] = useState(0);
const addNumber = () => {
    setCount(count => count + 1);
  };
	return (
		<Card>
			<Title>{props.post.postName}</Title>
			<Paragraph>{props.post.description}</Paragraph>
			<p>Likes <span>{count}</span></p>
			<button onClick={() => addNumber()}>Like</button>
			<Button onClick={() => deletePost(props.post.id)}>Delete</Button>
			<Button>Edit</Button>
		</Card>
	);
}

export default connect(
	null,
	{ deletePost },
)(PostCard);
