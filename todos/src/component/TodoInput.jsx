import React from 'react';
import styled from 'styled-components';

function TodoInput() {
  return (
    <Container>
      <Input placeholder='할일을 입력해 주세요' />
      <Button>등록</Button>
    </Container>
  );
}

const Container = styled.div`
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

  cursor: pointer;
`;

export default TodoInput;
