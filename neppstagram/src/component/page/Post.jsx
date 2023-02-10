import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Post() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default Post;
