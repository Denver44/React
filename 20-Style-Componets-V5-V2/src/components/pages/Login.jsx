import React, { useState, useEffect } from 'react';
import {
  Input,
  PasswordInput,
  Layout,
  Button,
  Spinner,
} from 'components/common';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
  > ${Button}:first-of-type {
    margin-top: 10px;
  }
  > ${Input}:first-of-type {
    margin-top: 10px;
  }
`;

let timeout;

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    e.persist();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <Layout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {isLoading ? (
          <Spinner success></Spinner>
        ) : (
          <>
            <span>Login if you have already account</span>
            <Input
              name="username"
              placeholder="Username"
              type="text"
              onChange={handleInputChange}
              value={formData.username}
            />
            <PasswordInput
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </>
        )}
        <Button type="submit" disabled={isLoading} large>
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
        {!isLoading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </Layout>
  );
};

export default Login;
