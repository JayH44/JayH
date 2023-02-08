import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function TodoHeader() {
  const todos = useSelector((state) => state.todo);
  const unDoneLength = todos.filter((todo) => !todo.done).length;
  return (
    <Container>
      <p>2023년 2월 28일</p>
      <p>
        해야할 일: {unDoneLength}/{todos.length}
      </p>
    </Container>
  );
}

const Container = styled.div``;

export default TodoHeader;
