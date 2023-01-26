import { useState, useRef } from 'react';

function InputText() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const inputRef = useRef();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({
      username: '',
      email: '',
    });
    inputRef.current.focus();
  };

  return (
    <div>
      <p>
        유저: {username} ({email})
      </p>
      <input
        name='username'
        onChange={handleInput}
        value={username}
        ref={inputRef}
        type='text'
      />
      <input name='email' onChange={handleInput} value={email} type='text' />
      <button onClick={onReset}>reset</button>
    </div>
  );
}

export default InputText;
