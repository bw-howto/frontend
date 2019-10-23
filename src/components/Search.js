import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { SEARCH_SUCCESS } from "../actions";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	justify-content: center;
`;

const FormBackground = styled.div`
	background: #de6e4b;
	width: 380;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	border-radius: 6px;
`;
const SearchWord = styled.label`
	font-size: 1.5rem;
	text-align: center;
	color: white;
	font-weight: 600;
	font-family: "Lato", sans-serif;
	padding-bottom: 5px;
`;

const Button = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #3a405a;
	color: #de6e4b;
	text-align: center;
	text-decoration: none;
	margin: 10px;
	border-radius: 6px;
	:hover {
		color: white;
	}
`;

const Search = props => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState({
		searchTerm: "",
	});

	const handleChange = e => {
		setSearchTerm({ [e.target.name]: e.target.value });
		props.filteredPosts.filter(post => {
			const filter = e.target.value.toLowerCase();
			post.postName.toLowerCase().includes(filter);
			dispatch({ type: SEARCH_SUCCESS, payload: filter });
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormBackground>
				<SearchWord htmlFor="searchTerm">Search:</SearchWord>
				<input
					type="text"
					onChange={e => handleChange(e)}
					value={searchTerm.searchTerm}
					name="searchTerm"
					placeholder="Search..."
				/>
				<Button type="submit">Search</Button>
			</FormBackground>
		</Form>
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
)(Search);
