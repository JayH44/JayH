import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tmdbAxios } from '../../api/tmdbAxios';

function Header() {
  const [leng, setLeng] = useState('ko-kr');
  const handleLeng = (text) => {
    setLeng(text);
    tmdbAxios.defaults.params.language = leng;
  };

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

        <LengBar>
          <Leng onClick={() => handleLeng('en-us')}>EN</Leng>
          <Leng onClick={() => handleLeng('ko-kr')}>KR</Leng>
        </LengBar>
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
  justify-content: space-between;

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

const LengBar = styled.ul`
  display: flex;
  gap: 10px;
`;
const Leng = styled.li`
  cursor: pointer;
`;

export default Header;
