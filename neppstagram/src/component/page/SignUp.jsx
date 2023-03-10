import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../login/SignUpForm';

function SignUp() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignUp;
