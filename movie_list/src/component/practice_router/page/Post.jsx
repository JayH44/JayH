import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

function Post() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

const Container = styled.div``;

export default Post;
