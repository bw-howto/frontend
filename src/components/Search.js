import React, { useState } from "react";

// search logic goes here.
// search logic is array.filter(arr.includes(item))

const Search = () => {
	const [searchTerm, setSearchTerm] = useState();

	return (
		<form>
			<label htmlFor="Search">Search:</label>
			<input
				type="text"
				value={searchTerm}
				name="Search"
				placeholder="Search..."
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default Search;
