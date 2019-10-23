import React, { useState } from "react";
import { connect } from "react-redux";
import { deletePost, updatePost } from "../actions";
import styled from "styled-components";

const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background: #f9dec9;
	border: 5px solid #3a405a;
	transition: 0.3s;
	width: auto;
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

	// Create state for isEditing
	// onClick sets state to true
	// condititonally render the form

	if (isEditing) {
		return (
			<form onSubmit={handleSubmit}>
				<label htmlFor="postName">Post Title:</label>
				<input
					type="text"
					name="postName"
					onChange={e =>
						setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
					}
					placeholder="Enter Title..."
					value={updatedPost.postName}
				/>
				<label htmlFor="description">Post Body:</label>
				<textarea
					onChange={e =>
						setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value })
					}
					col="5"
					name="description"
					value={updatedPost.description}
					placeholder="Enter Text..."
				/>
				<button type="submit">Update Post</button>
			</form>
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
