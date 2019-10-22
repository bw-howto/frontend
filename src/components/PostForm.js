import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";

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
		props.addPost(newPost);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="postName">Post Title:</label>
			<input
				type="text"
				name="postName"
				onChange={handleChange}
				placeholder="Enter Title..."
				value={newPost.postName}
			/>
			<label htmlFor="description">Post Body:</label>
			<textarea
				onChange={handleChange}
				col="5"
				name="description"
				value={newPost.description}
			>
				Enter Text...
			</textarea>
			<button type="submit">Add Post</button>
		</form>
	);
};

export default connect(
	null,
	{ addPost },
)(PostForm);
