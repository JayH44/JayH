import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getCurrentUser } from './api/auth';
import Header from './component/common/Header';
import Redirect from './component/common/Redirect';
import { Router } from './Router';
import { theme } from './styles';

function App() {
  useEffect(() => {
    getCurrentUser()
      .then(() => {
        console.log('render');
        Redirect('home');
      })
      .catch(() => {
        alert('로그인 정보가 없어서 로그인 화면으로 이동합니다.');
        Redirect('login');
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Wrapper>
          <Router />
        </Wrapper>
      </Container>
    </ThemeProvider>
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
export default App;
