import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

// search logic goes here.
// search logic is array.filter(arr.includes(item))

const Search = props => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState();

	const handleChange = e => {
		console.log("searchTerm", searchTerm);
		setSearchTerm(e.target.value);
		// props.filteredPosts.filter(post => post.includes(searchTerm));
	};

	return (
		<form>
			<label htmlFor="Search">Search:</label>
			<input
				type="text"
				onChange={e => handleChange(e)}
				value={searchTerm}
				name="Search"
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
