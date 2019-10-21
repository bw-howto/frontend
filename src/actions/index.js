import axiosWithAuth from "../utils/axiosWithAuth";

// Actions
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT = "LOGOUT";

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	return axiosWithAuth()
		.post("/login", creds)
		.then(res => {
			console.log("token", res.data.payload);
			localStorage.setItem("token", res.data.payload);
			dispatch({ type: LOGIN_SUCCESS });

			return true;
		})
		.catch(err => dispatch({ type: LOGIN_FAILED, payload: err.response }));
};

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
	localStorage.removeItem("token");
};
