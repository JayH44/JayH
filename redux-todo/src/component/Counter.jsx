import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increasement, decreasement } from '../reducer/counter';

function Counter() {
  const [num, setNum] = useState(1);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Container>
      <p>{count}</p>
      <button onClick={() => dispatch(increasement(num))}>+</button>
      <button onClick={() => dispatch(decreasement(num))}>-</button>
      <input
        type='number'
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
    </Container>
  );
}

const Container = styled.div``;

export default Counter;
