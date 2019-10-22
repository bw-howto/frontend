import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions";

function PostCard(props) {
	const deletePost = id => {
		props.deletePost(id);
	};

	return (
		<div>
			<button onClick={() => deletePost(props.post.id)}>Delete</button>
			<button>Edit</button>
			<p> Hi there</p>
		</div>
	);
}

export default connect(
	null,
	{ deletePost },
)(PostCard);
