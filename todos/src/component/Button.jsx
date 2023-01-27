import React from 'react';
import styled, { css } from 'styled-components';

function Button({ text, bgColor, big }) {
  return (
    <Container bgColor={bgColor} big={big}>
      {text}
    </Container>
  );
}

const Container = styled.div`
  width: 100px;
  padding: 5px 0;
  background-color: ${({ bgColor }) => bgColor || 'black'};
  color: white;
  text-align: center;
  border-radius: 4px;

  & + & {
    margin-top: 5px;
  }

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      padding: 8px 0;
      font-size: 1.2rem;
    `}
`;

export default Button;
