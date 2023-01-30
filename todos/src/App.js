import Todos from './component/Todos';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Todos />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  min-height: 750px;
  background: #f2f2f2;
  justify-content: center;
  align-items: center;
`;
export default App;
