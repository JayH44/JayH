import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchCurrentUser } from './redux/user';
import { Router } from './Router';
import { theme } from './styles';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user.data) dispatch(fetchCurrentUser());
  }, [dispatch, user]);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
