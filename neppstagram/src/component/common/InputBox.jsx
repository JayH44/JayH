import React from 'react';
import styled, { css } from 'styled-components';

function InputBox({ children, active, placeholder }) {
  return (
    <Container active={active}>
      {<Placeholder active={active}>{placeholder}</Placeholder>}
      {children}
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.bd_color};
  width: 200px;
  position: relative;
  height: 30px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    padding: 0 5px;
    font-size: 0.8rem;
  }

  & + & {
    margin-top: 3px;
  }

  ${({ active }) =>
    active &&
    css`
      input {
        top: 5px;
      }
    `}
`;

const Placeholder = styled.div`
  color: #aaa;
  height: 100%;
  font-size: 0.8rem;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 2.5px 5px;
  transition: transform 0.2s;
  transform-origin: left top;

  ${({ active }) =>
    active &&
    css`
      position: absolute;
      top: -8px;
      left: 5px;
      color: #6767f1;
      background-color: white;
      transform: scale(0.8);
      font-weight: 600;
    `}
`;

export default InputBox;
