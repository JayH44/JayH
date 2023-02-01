import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Wrapper>
        <h1>
          <Link to='/'>Nepp Movie</Link>
        </h1>
        <NavBar>
          <ul>
            <li>
              <Link to='movie'>영화</Link>
            </li>
            <li>
              <Link to='tv'>TV프로그램</Link>
            </li>
            <li>
              <Link to='person'>인물</Link>
            </li>
          </ul>
        </NavBar>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #032541;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;

  h1 {
    line-height: 60px;
  }
`;

const NavBar = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    color: white;

    li {
      font-weight: 600;
    }
  }
`;

// const SecondBar = styled.ul`
//   opacity: 1;
// `;

export default Header;
