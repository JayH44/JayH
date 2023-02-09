import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import InputBox from '../common/InputBox';

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Container>
      <h2>Login</h2>
      <InputBox
        placeholder='이메일을 입력해주세요'
        active={inputs.email.length > 0}
      >
        <input
          name='email'
          type='text'
          value={inputs.email}
          onChange={handleInputs}
        />
      </InputBox>

      <InputBox
        placeholder='비밀번호를 입력해주세요'
        active={inputs.password.length > 0}
      >
        <input
          name='password'
          type='password'
          value={inputs.password}
          onChange={handleInputs}
        />
      </InputBox>
      <BtnBox>
        <Button text='Login' />
        <Button text='SignIn' />
      </BtnBox>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  padding: 50px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 20px;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const BtnBox = styled.div`
  margin-top: 10px;
`;

export default LoginForm;
