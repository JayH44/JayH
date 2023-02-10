import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';

function Main() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (user.isLoading) return null;
  if (!user.data) {
    alert('유저정보가 없습니다. 로그인창으로 이동합니다.');
    navigate('/');
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
