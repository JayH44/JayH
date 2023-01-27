import React from 'react';
import styled from 'styled-components';

function TodoHeader() {
  const dateStr = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'narrow',
    day: 'numeric',
    // dateStyle: 'full',
  });

  return (
    <Container>
      <DateText>{dateStr}</DateText>
      <CountText>완료: 0/4</CountText>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

const DateText = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const CountText = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

export default TodoHeader;
