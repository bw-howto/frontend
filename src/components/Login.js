import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const MyForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	margin: 50px auto;
	padding: 25px;
	width: 25%;
	background: #3a405a;
	border-radius: 6px;
	:hover {
		transition: 0.3s;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

const Button = styled.button`
	width: 200px;
	height: 35px;
	background-color: #de6e4b;
	color: #fff;
	border-radius: 3px;
	font-size: 1rem;
	font-weight: 800;
	margin-top: 25px;
	:hover {
		background-color: #de6e4b;
		color: #3a405a;
	}
`;

const FormField = styled(Field)`
	padding: 10px;
	margin: 10px;
`;

const Title = styled.h1`
	padding: 1px;
	margin: 1px;
	color: #de6e4b;
`;
const Error = styled.p`
	color: red;
	margin: 0;
`;

const UserForm = ({ touched, errors, status, handleSubmit }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		status && setUsers([...users, status]);
	}, [status, users]);
	return (
		<div>
			<MyForm onSubmit={handleSubmit}>
				<Title>Login</Title>
				<FormField type="text" name="username" placeholder="User Name" />
				{touched.username && errors.username && (
					<Error>{errors.username}</Error>
				)}

				<FormField type="password" name="password" placeholder="Password" />
				{touched.password && errors.password && (
					<Error>{errors.password}</Error>
				)}

				<Button type="submit">Submit</Button>
			</MyForm>
		</div>
	);
};

const FormikForm = withFormik({
	mapPropsToValues({ password, username }) {
		return {
			username: username || "",
			password: password || "",
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required("Please input a user name"),

		password: Yup.string().required("Password must be entered"),
	}),

	handleSubmit(values, { props }) {
		axios
			.post("https://how-to-michaelbaynon.herokuapp.com/api/login", values)
			.then(res => {
				console.log(res.data);
				localStorage.setItem("token", res.data.token);
				if (res.data.token) {
					props.history.push("/top-posts");
					window.location.reload();
				}
			})
			.catch(err => console.log(err.response));
	},
})(UserForm);

export default FormikForm;
