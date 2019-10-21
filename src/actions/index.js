import axiosWithAuth from "../utils/axiosWithAuth";

// User Actions

export const LOGOUT = "LOGOUT";

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
	localStorage.removeItem("token");
};

// Search actions
export const SEARCH_START = "SEARCH_START";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILED = "SEARCH_FAILED";

export const search = item => dispatch => {
	// code...
};
