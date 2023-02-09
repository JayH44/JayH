import React from 'react';
import styled from 'styled-components';
import LoginForm from '../login/LoginForm';

function Login() {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
