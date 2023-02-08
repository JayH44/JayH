import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, toggleTodo } from '../reducer/todos';

function TodoItem({ todo }) {
  const { id, text, done } = todo;
  const dispatch = useDispatch();

  return (
    <Container done={done}>
      <span onClick={() => dispatch(toggleTodo(id))}>{text}</span>
      <button onClick={() => dispatch(removeTodo(id))}>삭제</button>
    </Container>
  );
}

const Container = styled.li`
  text-decoration: ${({ done }) => done && 'line-through'};
`;

export default TodoItem;
