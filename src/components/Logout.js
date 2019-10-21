import React from "react";
import { logout } from "../actions";
import { connect } from "react-redux";

const Logout = props => {
	handleLogout = () => {
		props.logout();
		window.location.reload();
	};

	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default connect(
	null,
	{
		logout,
	},
)(Logout);
