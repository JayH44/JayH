import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../profile/ProfileBox';

function Profile() {
  return (
    <Container>
      <ProfileBox />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Profile;
