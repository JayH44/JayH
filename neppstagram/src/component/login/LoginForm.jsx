import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginUser } from '../../api/auth';
import { fetchCurrentUser } from '../../redux/user';
import Button from '../common/Button';
import InputBox from '../common/InputBox';

function LoginForm() {
  const dispatch = useDispatch();
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
    await loginUser(inputs);
    dispatch(fetchCurrentUser());
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
          <Button>Login</Button>
          <Button type='button'>
            <Link to='/signup'>SignUp</Link>
          </Button>
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
