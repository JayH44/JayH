import React from 'react';
import styled from 'styled-components';
import TodoBody from './TodoBody';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

function Todos() {
  return (
    <Container>
      <TodoHeader />
      <TodoBody />
      <TodoInput />
    </Container>
  );
}

const Container = styled.div``;

export default Todos;
