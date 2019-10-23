import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePost, updatePost } from "../actions";
import styled from "styled-components";

const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background: #f9dec9;
	border: 5px solid #3a405a;
	transition: 0.3s;
	width: 40%;
	padding: 10px 20px 10px 20px;
	margin: 20px;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

const Title = styled.h1`
	margin: 10px;
	font-size: 2.5rem;
	color: #353238;
`;

const Paragraph = styled.p`
	padding: 5px;
	font-size: 1.2rem;
	text-align: left;
	color: #353238;
`;

const Button = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #3a405a;
	color: #de6e4b;
	padding: 2px 20px;
	text-align: center;
	text-decoration: none;
	margin: 10px;
	border-radius: 6px;
	:hover {
		background-color: #de6e4b;
		color: #3a405a;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;
const FormBackground = styled.div`
	background: #3a405a;
	width: 30%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	border-radius: 6px;
	margin: 30px;
`;
const PostTitle = styled.label`
	font-size: 1.5rem;
	text-align: center;
	color: white;
	font-weight: 600;
	font-family: "Lato", sans-serif;
	padding-right: 20px;
	width: auto;
`;
const TitleInput = styled.input`
	height: 30px;
	width: 300px;
	padding: 12px 20px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 4px;
	background-color: #f8f8f8;
	font-size: 16px;
	resize: none;
`;

const FormBackground2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: #3a405a;
	width: 40%;
	height: 240px;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 30px;
`;
const PostTitle2 = styled.label`
	font-size: 1.5rem;
	text-align: center;
	color: white;
	font-weight: 600;
	font-family: "Lato", sans-serif;
	padding: 10px;
`;
const TitleInput2 = styled.textarea`
	width: 90%;
	height: 150px;
	padding: 12px 20px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 4px;
	background-color: #f8f8f8;
	font-size: 16px;
	resize: none;
`;

const Button2 = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #de6e4b;
	color: #3a405a;
	text-align: center;
	text-decoration: none;
	margin: 10px;
	padding: 25px 50px;
	border-radius: 6px;
	:hover {
		color: white;
	}
`;

function PostCard(props) {
	const deletePost = id => {
		props.deletePost(id);
	};
	const [count, setCount] = useState(
		Number(localStorage.getItem("likes" + props.post.id)),
	);

	const addNumber = id => {
		setCount(count => Number(localStorage.getItem("likes" + id)) + 1);
		window.localStorage.setItem("likes" + id, count);
	};

	const [updatedPost, setUpdatedPost] = useState({
		postName: props.post.postName,
		description: props.post.description,
	});

	const [isEditing, setIsEditing] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		props.updatePost(props.post.id, updatedPost);
		setIsEditing(false);
	};

	const handleChange = e => {
		setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
	};

	// Create state for isEditing
	// onClick sets state to true
	// condititonally render the form

	if (isEditing) {
		return (
			<Form onSubmit={handleSubmit}>
				<FormBackground>
					<PostTitle htmlFor="postName">Post Title:</PostTitle>
					<TitleInput
						type="text"
						name="postName"
						onChange={handleChange}
						placeholder="Enter Title..."
						value={updatedPost.postName}
					/>
				</FormBackground>
				<FormBackground2>
					<PostTitle2 htmlFor="description">Post Body:</PostTitle2>
					<TitleInput2
						onChange={handleChange}
						col="5"
						name="description"
						value={updatedPost.description}
						placeholder="Enter Text..."
					/>
				</FormBackground2>
				<Button2 type="submit">Update Post</Button2>
			</Form>
		);
	} else {
		return (
			<Card>
				<Title>{props.post.postName}</Title>
				<Paragraph>{props.post.description}</Paragraph>
				<p>
					Likes{" "}
					<span>{window.localStorage.getItem("likes" + props.post.id)}</span>
				</p>
				<Button onClick={() => addNumber(props.post.id)}>Like</Button>
				<Button onClick={() => deletePost(props.post.id)}>Delete</Button>
				<Button onClick={() => setIsEditing(true)}>Edit</Button>
			</Card>
		);
	}
}

export default connect(
	null,
	{ deletePost, updatePost },
)(PostCard);
