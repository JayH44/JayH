import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = (op) => {
      setCount(count + op);
      setCount(count + op);
      setCount((num) => num + op);
    },
    onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => onIncrease(1)}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
