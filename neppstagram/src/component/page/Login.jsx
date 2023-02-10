import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../login/LoginForm';

function Login() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  if (user.isLoading) return;
  if (user.data) {
    alert('로그인이 성공했습니다. 홈으로 이동합니다.');
    navigate('/home');
  }
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
