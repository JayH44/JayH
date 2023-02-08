import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createTodo } from '../reducer/todos';

function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
    setText('');
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>등록</button>
      </form>
    </Container>
  );
}

const Container = styled.div``;

export default TodoInput;
