import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser } from '../../api/auth';
import Button from '../common/Button';
import InputBox from '../common/InputBox';

function LoginForm() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await loginUser(inputs);
    if (success) {
      alert('로그인에 성공하셨습니다.');
      navigate('/home');
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <Button
            type='button'
            text={<Link to='/signup'>{'SignUp'}</Link>}
          ></Button>
        </BtnBox>
      </form>
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
