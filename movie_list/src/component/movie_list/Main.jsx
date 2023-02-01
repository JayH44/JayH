import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
function Main() {
  return (
    <Router>
      <Container>
        <Header />
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default Main;
