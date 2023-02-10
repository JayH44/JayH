import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signUpUser } from '../../api/auth';
import Button from '../common/Button';
import InputBox from '../common/InputBox';

function SignUpForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
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
    const data = await signUpUser(inputs);
    if (data.success) {
      alert('회원가입에 성공하셨습니다.');
      navigate('/login');
    }
  };

  return (
    <Container>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <InputBox
          placeholder='이름을 입력해주세요'
          active={inputs.name.length > 0}
        >
          <input
            name='name'
            type='text'
            value={inputs.name}
            onChange={handleInputs}
          />
        </InputBox>

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
          <Button type='submit' onClick={handleSubmit}>
            SignUp
          </Button>
          <Button type='button' bgColor='red'>
            <Link to='/'>Cancel</Link>
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
    text-align: center;
  }
`;

const BtnBox = styled.div`
  margin-top: 10px;
`;

export default SignUpForm;
