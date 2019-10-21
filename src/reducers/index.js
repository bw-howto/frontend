import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const initialState = {
	posts: [],
	loggingIn: false,
	gettingPosts: false,
	addingPost: false,
	deletingPost: false,
	updatingPost: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case LOGIN_START:
			return {
				...state,
				loggingIn: true,
				error: "",
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				error: "",
			};
		case LOGIN_FAILED:
			return {
				...state,
				loggingIn: false,
				error: action.payload,
			};
	}
};
