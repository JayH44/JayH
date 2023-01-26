import React, { useEffect } from 'react';

function UserCreate({
  handleInput,
  regiInput,
  //   resetInputs,
  inputRef,
  name,
  email,
}) {
  useEffect(() => {
    console.log('UserCreate render');
  });

  return (
    <div>
      <input
        name='name'
        onChange={handleInput}
        value={name}
        ref={inputRef}
        type='text'
      />
      <input name='email' onChange={handleInput} value={email} type='text' />
      <button onClick={regiInput}>등록</button>
      {/* <button onClick={resetInputs}>초기화</button> */}
    </div>
  );
}

export default React.memo(UserCreate);
