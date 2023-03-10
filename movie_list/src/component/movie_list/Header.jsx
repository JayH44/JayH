import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header({ handleLeng }) {
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <h1>
            <Link to='/'>Nepp</Link>
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
        </LeftBox>
        <RightBox>
          <LengBar>
            <Leng onClick={() => handleLeng('en-us')}>EN</Leng>
            <Leng onClick={() => handleLeng('ko-kr')}>KR</Leng>
          </LengBar>
          <Search />
        </RightBox>
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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  color: white;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h1 {
    line-height: 60px;
  }
`;

const NavBar = styled.nav`
  min-width: 190px;
  ul {
    display: flex;
    gap: 20px;
    color: white;

    li {
      font-weight: 600;
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LengBar = styled.ul`
  display: flex;
  gap: 10px;
`;
const Leng = styled.li`
  cursor: pointer;
`;

export default Header;
