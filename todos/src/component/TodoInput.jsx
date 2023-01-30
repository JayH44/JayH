import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function TodoInput({ dispatch }) {
  const [text, setText] = useState('');
  const inputRef = useRef();
  const nextId = useRef(4);
  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => inputRef.current.focus(), []);

  const submitTodo = (e) => {
    if (text === '') {
      alert('할일을 입력해 주세요');
      return;
    }
    e.preventDefault();
    dispatch({ type: 'SUBMIT_TODO', nextId, text });
    setText('');
    inputRef.current.focus();
  };

  return (
    <Container onSubmit={submitTodo}>
      <Input
        placeholder='할일을 입력해 주세요'
        value={text}
        onChange={handleText}
        ref={inputRef}
      />
      <Button>등록</Button>
    </Container>
  );
}

const Container = styled.form`
  border-top: 1px solid ${({ theme }) => theme.colors.bd_color};
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
  font-size: 0.8rem;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  padding: 5px 0;
  margin-top: 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: #fff;
  font-weight: 700;

  transition: background-color 0.4s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover_color};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active_color};
  }
`;

export default TodoInput;
