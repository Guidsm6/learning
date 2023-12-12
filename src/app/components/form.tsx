import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6).required("Password must be at least 6 characters long"),
});

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #301111;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledInput = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
`;

const StyledLink = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  text-align: right;
`;

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      // Replace with actual API call to your backend
      const isLoginSuccessful = values.email === "email@gmail.com" && values.password === "123456";

      if (isLoginSuccessful) {
        // Log the login data
        console.log(`Login data: Email: ${values.email}, Password: ${values.password}`);

        router.push("/dashboard");
      } else {
        console.error("Login failed");
        // Show error message to the user
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} validationSchema={schema} onSubmit={handleSubmit}>
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <StyledLabel htmlFor="email">Email Address</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.email && touched.email && <StyledError name="email" component="div" className="error" />}

          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && touched.password && <StyledError name="password" component="div" className="error" />}

          <StyledButton type="submit" disabled={!touched || !errors}>
            Login
          </StyledButton>
          <StyledLink href="#" className="forgot-password">
            Forgot your password?
          </StyledLink>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
