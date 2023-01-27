import React from 'react';
import { useState, useRef } from 'react';

function TodoCreate({ dispatch }) {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleInput = (e) => setText(e.target.value);

  const handleReset = () => {
    setText('');
    inputRef.current.focus();
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!text) {
      alert('할일을 입력해 주세요');
      inputRef.current.focus();
      return;
    }
    dispatch({ type: 'CREATE_TODO', text });
    handleReset();
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input type='text' onChange={handleInput} value={text} ref={inputRef} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(TodoCreate);
