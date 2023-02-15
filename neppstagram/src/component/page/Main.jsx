import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Header from '../common/Header';

function Main() {
  const user = useSelector((state) => state.user);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePosition = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  if (user.isLoading) return;
  if (!user.data) {
    alert('유저정보가 없습니다. 로그인창으로 이동합니다.');
    return <Navigate to='/' />;
  }

  return (
    <Container onMouseMove={handlePosition}>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <MouseBox position={position} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  position: relative;

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

const MouseBox = styled.div`
  position: absolute;

  top: ${({ position }) => position.y}px;
  left: ${({ position }) => position.x}px;
  transform: translate3d(-50%, -50%, 0);

  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 50%;
  user-select: none;
`;
export default Main;
