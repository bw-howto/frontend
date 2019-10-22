import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions";

function PostCard(props) {
	const deletePost = id => {
		props.deletePost(id);
	};

	return (
		<div>
			<h1>{props.post.postName}</h1>
			<p>{props.post.description}</p>
			<button onClick={() => deletePost(props.post.id)}>Delete</button>
			<button>Edit</button>
		</div>
	);
}

export default connect(
	null,
	{ deletePost },
)(PostCard);
