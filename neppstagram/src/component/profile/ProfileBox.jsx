import React from 'react';
import styled from 'styled-components';

function ProfileBox() {
  return (
    <Container>
      <ImgBox>
        <img
          src='https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG'
          alt='강아지'
        />
      </ImgBox>
      <UserName>Jay</UserName>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #eee;
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
  }
`;
const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export default ProfileBox;
