import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <GnbList>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
      </GnbList>
    </Container>
  );
}

const Container = styled.div``;

const GnbList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export default Header;
