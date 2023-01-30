import React, { useReducer } from 'react';
import TodoBody from './TodoBody';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import styled from 'styled-components';

function reducer(state, action) {
  switch (action.type) {
    case 'SUBMIT_TODO':
      return state.concat({
        id: action.nextId.current++,
        text: action.text,
        done: false,
      });
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: '투두리스트 스타일링', done: true },
    { id: 2, text: '투두리스트 기능 구현', done: false },
    { id: 3, text: '투두리스트 하기', done: false },
  ]);

  console.log(todos);
  return (
    <Container>
      <TodoHeader todos={todos} />
      <TodoBody todos={todos} dispatch={dispatch} />
      <TodoInput dispatch={dispatch} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 700px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);

  background-color: #fff;
`;

export default Todos;
