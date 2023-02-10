import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';

function Main() {
  const user = useSelector((state) => state.user);
  if (user.isLoading) return;
  if (!user.data) {
    alert('유저정보가 없습니다. 로그인창으로 이동합니다.');
    return <Navigate to='/' />;
  }
  return (
    <Container>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: #eee;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  width: 500px;
  background-color: #fff;
  margin: 0 auto;
`;

export default Main;
