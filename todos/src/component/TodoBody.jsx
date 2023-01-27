import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

function TodoBody() {
  return (
    <Container>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default TodoBody;
