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
  background: #F7EF99;
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  background-color: #F78E69;
  color: #fff;
  border-radius: 3px;
`;

const FormField =styled(Field)`
    padding: 10px;
    margin: 10px;
`

const FormLabel =styled.label`
    padding: 10px;
    margin: 10px;
`

const Title =styled.h1`
    padding: 1px;
    margin: 1px;
    color: #5D675B
`
const Error =styled.p`
color: red;
`


const UserForm = ({ values, touched, errors, status }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);

    return (
      <div>
        <MyForm> 
            <Title>Register</Title>
          <FormField type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && <Error>{errors.name}</Error>}

          <FormField type="text" name="username" placeholder="User Name" />
          {touched.username && errors.username && <Error>{errors.username}</Error>}

          <FormField type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && <Error>{errors.email}</Error>}

          <FormField type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && <Error>{errors.password}</Error>}

          <FormLabel>
            Do you want to create How-To's?
            <FormField
              type="checkbox"
              name="creator"
              checked={values.creator}
            />
            {touched.tos && errors.tos && <Error>{errors.tos}</Error>} 
          </FormLabel>

          <Button type="submit">Submit</Button>
        </MyForm>
        {users.map(user => (
          <ul key={user.id}>
            <p>Name: {user.name}</p>
            <p>User Name: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Creator?: {user.creator ? 'true': 'false'}</p>
          </ul>
        ))}
      </div>
    );
  };

  const FormikForm = withFormik({


    mapPropsToValues({ name, email, password, username, creator }) {
      return {
        name: name || "",
        email: email || "",
        password: password || "",
        username: username || "",
        creator: creator || false,
      };
    },


    validationSchema: Yup.object().shape({

      name: Yup.string()
      .min(2, "Name must be at least two letters")
      .required("Please input a name"),
      
      username: Yup.string()
      .min(3, "User Name must be at least three characters")
      .required("Please input a user name"),

      email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is a required field"),
      
      password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password must be entered"),

    }),


    handleSubmit(values, { setStatus }) {
      axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
            console.log(res.data)
          setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }
  })(UserForm);
  export default FormikForm;