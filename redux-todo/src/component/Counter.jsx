import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increaseNum, decreaseNum } from '../reducer/counter';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Container>
      <p>{count}</p>
      <button onClick={() => dispatch(increaseNum())}>+</button>
      <button onClick={() => dispatch(decreaseNum())}>-</button>
    </Container>
  );
}

const Container = styled.div``;

export default Counter;
