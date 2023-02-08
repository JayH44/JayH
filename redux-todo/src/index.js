import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducer/counter';
import { Provider } from 'react-redux';
import { todoReducer } from './reducer/todos';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
