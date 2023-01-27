import React, { useReducer } from 'react';
import { counterReducer } from '../state/counter';

function Reducer() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    amount: 1,
  });

  const handleAmount = (e) =>
    dispatch({ type: 'CHANGE_AMOUNT', amount: parseInt(e.target.value) });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <input type='number' onChange={handleAmount} />
    </div>
  );
}

export default Reducer;
