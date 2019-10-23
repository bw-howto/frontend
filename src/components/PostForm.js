import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items:center;
`;
const FormBackground =styled.div`
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

const FormBackground2 =styled.div`
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

const Button = styled.button`
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

const PostForm = props => {
	const [newPost, setNewPost] = React.useState({
		postName: "",
		description: "",
	});

	const handleChange = e => {
		setNewPost({ ...newPost, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addPost(newPost, redirect);
	};

	const redirect = () => {
		props.history.push("/top-posts");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormBackground>
			<PostTitle htmlFor="postName">Post Title:</PostTitle>
			<TitleInput
				type="text"
				name="postName"
				onChange={handleChange}
				placeholder="Enter Title..."
				value={newPost.postName}
			/>
			</FormBackground>
			<FormBackground2>
			<PostTitle2 htmlFor="description">Post Body:</PostTitle2>
			<TitleInput2
				onChange={handleChange}
				col="5"
				name="description"
				value={newPost.description}
				placeholder="Enter Text..."
			/>
			</FormBackground2>
			<Button type="submit">Add Post</Button>
		</Form>
	);
};

export default connect(
	null,
	{ addPost },
)(PostForm);
