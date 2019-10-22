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
	background: #f7ef99;
`;

const Button = styled.button`
	width: 200px;
	height: 35px;
	background-color: #f78e69;
	color: #fff;
	border-radius: 3px;
`;

const FormField = styled(Field)`
	padding: 10px;
	margin: 10px;
`;

const Title = styled.h1`
	padding: 1px;
	margin: 1px;
	color: #5d675b;
`;
const Error = styled.p`
	color: red;
`;



const UserForm = ({ values, touched, errors, status }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		status && setUsers(users => [...users, status]);
	}, [status]);

	return (
		<div>
			<MyForm>
				<Title>Register</Title>
				{/*
				<FormField type="text" name="name" placeholder="Name" />
				{touched.name && errors.name && <Error>{errors.name}</Error>}
				*/}
				<FormField type="text" name="username" placeholder="User Name" />
				{touched.username && errors.username && (
					<Error>{errors.username}</Error>
				)}
				{/*
				<FormField type="text" name="email" placeholder="Email" />
				{touched.email && errors.email && <Error>{errors.email}</Error>}
				*/}
				<FormField type="password" name="password" placeholder="Password" />
				{touched.password && errors.password && (
					<Error>{errors.password}</Error>
				)}

				<Field component="select" name="accountType">
					<option value="" label="Select an account type" />
					<option value="user" label="User" />
					<option value="creator" label="Creator" />
				</Field>
				{touched.accountType && errors.accountType && <Error>{errors.accountType}</Error>}
				
				<Button type="submit">Submit</Button>
			</MyForm>
		</div>
	);
};

const FormikForm = withFormik({
	mapPropsToValues({ password, username, accountType }) {
		return {
			password: password || "",
			username: username || "",
			creator: accountType || "",
		};
	},

	validationSchema: Yup.object().shape({

		username: Yup.string()
			.min(3, "User Name must be at least three characters")
			.required("Please input a user name"),

		password: Yup.string()
			.min(5, "Password must be at least 5 characters")
			.required("Password must be entered"),

			accountType: Yup.string()
			.oneOf(["user", "creator"])
			.required("Please select one")
	}),

	handleSubmit(values, { setStatus }) {
		axios
			.post("https://how-to-michaelbaynon.herokuapp.com/api/register", values)
			.then(res => {
				console.log(res.data);
				setStatus(res.data);
			})
			.catch(err => console.log(err.response));
	},
})(UserForm);
export default FormikForm;
