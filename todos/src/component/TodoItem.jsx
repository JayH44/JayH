import React from 'react';
import styled from 'styled-components';

function TodoItem() {
  return <Container>할일 목록</Container>;
}

const Container = styled.li`
  padding: 5px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

export default TodoItem;
