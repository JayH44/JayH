import React from 'react';
import styled from 'styled-components';

function TodoItem() {
  return (
    <Container>
      할일 목록
      <Button>삭제</Button>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

const Button = styled.button``;

export default TodoItem;
