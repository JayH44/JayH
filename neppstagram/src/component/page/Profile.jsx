import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCurrentUser } from '../../redux/user';
import Button from '../common/Button';
import ProfileBox from '../profile/ProfileBox';

function Profile() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('access-token');
      dispatch(fetchCurrentUser());
      window.location.reload();
    }
  };

  return (
    <Container>
      <ProfileBox />
      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default Profile;
