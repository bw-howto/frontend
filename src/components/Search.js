import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { SEARCH_SUCCESS } from "../actions";

// search logic goes here.
// search logic is array.filter(arr.includes(item))

const Search = props => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState();

	const handleChange = e => {
		console.log("searchTerm", searchTerm);
		setSearchTerm(e.target.value);
		props.filteredPosts.filter(post => {
			const filter = e.target.value;
			post.postName.includes(filter);
			dispatch({ type: SEARCH_SUCCESS, payload: filter });
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="searchTerm">Search:</label>
			<input
				type="text"
				onChange={e => handleChange(e)}
				value={searchTerm}
				name="searchTerm"
				placeholder="Search..."
			/>
			<button type="submit">Search</button>
		</form>
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
