import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineEdit,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/auth';
import SearchResult from './SearchResult';

function Header() {
  const [input, setInput] = useState('');
  const [userResults, setUserResults] = useState('');
  const [opacity, setOpacity] = useState(0);
  const [onBlur, setOnBlur] = useState(true);
  const handleInput = (e) => {
    setInput(e.target.value);
    getUsers(1).then((res) => {
      const user = res.data.filter((user) =>
        user.name.toLowerCase().includes(e.target.value)
      );
      setUserResults(user);
      setOpacity(1);
    });
  };

  const handleBlur = () => {
    setOnBlur(true);
    setOpacity(0);

    setTimeout(() => {
      setUserResults('');
    }, 500);
  };

  return (
    <Container>
      <Wrapper>
        <h1>Neppstargram</h1>
        <InputBox
          active={input.length > 0}
          placeholder={
            <>
              <AiOutlineSearch />
              검색
            </>
          }
        >
          <input
            type='text'
            value={input}
            onChange={handleInput}
            onFocus={handleInput}
            onBlur={handleBlur}
          />
        </InputBox>
        {userResults.length > 0 && (
          <SearchResult
            results={userResults}
            opacity={opacity}
            onBlur={onBlur}
          />
        )}
        <Gnb>
          <GnbList>
            <GnbItem>
              <Link to='home'>
                <AiOutlineHome />
              </Link>
            </GnbItem>
            <GnbItem>
              <Link to='post'>
                <AiOutlineSearch />
              </Link>
            </GnbItem>
            <GnbItem>
              <Link to='post/edit'>
                <AiOutlineEdit />
              </Link>
            </GnbItem>
            <GnbItem>
              <Link to='profile'>
                <AiOutlineUser />
              </Link>
            </GnbItem>
          </GnbList>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
  padding: 10px 0;
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Gnb = styled.nav`
  display: flex;
  align-items: center;
`;
const GnbList = styled.ul`
  display: flex;
  gap: 10px;
`;
const GnbItem = styled.li`
  svg {
    width: 20px;
    height: 20px;
  }
`;

export default Header;
