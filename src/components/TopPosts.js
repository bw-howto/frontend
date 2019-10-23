import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { connect, useDispatch } from "react-redux";
import { RETRIEVE_POSTS } from "../actions";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import Search from "./Search";

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-bottom: 20px;
`;

const Holder = styled.div``;

const TopPosts = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getPosts = () => {
			axiosWithAuth()
				.get("https://how-to-michaelbaynon.herokuapp.com/api/postList")
				.then(response => {
					dispatch({ type: RETRIEVE_POSTS, payload: response.data });
				})
				.catch(error => {
					console.error("oh no", error);
				});
		};
		getPosts();
	}, [dispatch]);

	return (
		<Holder>
			<Search />
			<Main>
				{props.filteredPosts.map(post => (
					<PostCard post={post} key={post.id} />
				))}
			</Main>
		</Holder>
	);
};

const mapStateToProps = state => {
	return {
		filteredPosts: state.filteredPosts,
	};
};

export default connect(
	mapStateToProps,
	{},
)(TopPosts);
