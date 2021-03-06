import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RETRIEVE_POSTS } from "../actions";
import axiosWithAuth from "../utils/axiosWithAuth";
import PostForm from "./PostForm";

const TopPosts = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getPosts = () => {
			axiosWithAuth()
				.get("https://how-to-michaelbaynon.herokuapp.com/api/postList")
				.then(response => {
					console.log(response.data);
					dispatch({ type: RETRIEVE_POSTS, payload: response.data });
					console.log(response);
				})
				.catch(error => {
					console.error("oh no", error);
				});
		};
		getPosts();
	}, [dispatch]);

	return (
		<div>
			<PostForm />
			{props.posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		posts: state.posts,
	};
};

export default connect(
	mapStateToProps,
	{},
)(TopPosts);
