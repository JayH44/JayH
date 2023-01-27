import React from 'react';
import styled from 'styled-components';

function Hello() {
  return (
    <Box>
      <h1>Hello React</h1>
    </Box>
  );
}

const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid black;
`;

export default Hello;
