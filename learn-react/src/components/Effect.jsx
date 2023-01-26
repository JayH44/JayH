import React from 'react';
import { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('렌더링');
  });

  useEffect(() => {
    console.log('마운트');

    return () => console.log('언마운트');
  }, []);

  useEffect(() => {
    console.log('after', count);
    return () => console.log('before', count);
  }, [count]);

  console.log('rendering');

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>
        <p>{input}</p>
        <input onChange={(e) => setInput(e.target.value)} type='text' />
      </div>
    </div>
  );
}

export default Effect;
