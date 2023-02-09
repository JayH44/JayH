import React from 'react';
import styled from 'styled-components';

function Button({ text, width, bgColor, color }) {
  return (
    <Container width={width} bgColor={bgColor} color={color}>
      {text}
    </Container>
  );
}

const Container = styled.button`
  display: block;
  width: ${({ width }) => width || 200}px;
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.main_color};
  color: ${({ color }) => color || '#fff'};
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 4px 0;

  cursor: pointer;

  & + & {
    margin-top: 3px;
  }
`;

export default Button;
