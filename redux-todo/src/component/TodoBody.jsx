import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';

function TodoBody() {
  const todos = useSelector((state) => state.todo);
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
}

const Container = styled.ul``;

export default TodoBody;
