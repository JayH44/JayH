import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { postTodo } from '../api/todos';
import { createTodo } from '../reducer/todos02';

function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postTodo(text);
    if (result.status === 201) {
      dispatch(createTodo(text));
      setText('');
    }
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
