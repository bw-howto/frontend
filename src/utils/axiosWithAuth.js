import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: "https://how-to-michaelbaynon.herokuapp.com/api",
	});
};

export default axiosWithAuth;
