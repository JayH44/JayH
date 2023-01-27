import React from 'react';
import styled, { keyframes } from 'styled-components';

function Container({ bgColor }) {
  return (
    <>
      <BigBox bgColor={bgColor}>Box</BigBox>
    </>
  );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.colors.main_color};
  animation: ${fadeIn} 1s 2;
  &:hover {
    color: ${({ theme }) => theme.colors.active_color};
  }

  @media (max-width: 600px) {
    width: 200px;
  }
`;

const BigBox = styled(Box)`
  width: 300px;
  height: 300px;
`;

export default Container;
