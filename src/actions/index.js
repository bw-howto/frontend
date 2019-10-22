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

// Post actions
export const RETRIEVE_POSTS = "RETRIEVE_POSTS";
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILED = "POST_FAILED";

export const addPost = post => dispatch => {
	dispatch({ type: POST_START });
	axiosWithAuth()
		.post("/createPost", post)
		.then(res => {
			dispatch({ type: POST_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: POST_FAILED, payload: err.response });
		});
};

// updating post action
export const UPDATING_START = "UPDATING_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const updatePost = (id, changes) => dispatch => {
	dispatch({ type: UPDATING_START });
	axiosWithAuth()
		.put(`${id}`, changes)
		.then(res => {
			dispatch({ type: UPDATE_SUCCESS, payload: changes });
		})
		.catch(err => {
			dispatch({ type: UPDATE_FAILED, payload: err.response });
		});
};

// deleting action
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILED = "DELETE_FAILED";

export const deletePost = id => dispatch => {
	dispatch({ type: DELETE_START });
	axiosWithAuth()
		.delete(`${id}`)
		.then(res => {
			dispatch({ type: DELETE_SUCCESS, payload: id });
		})
		.catch(err => {
			dispatch({ type: DELETE_FAILED, payload: err.response });
		});
};
