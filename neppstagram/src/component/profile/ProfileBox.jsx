import React, { useState } from 'react';
import styled from 'styled-components';
import ImgCrop from '../common/ImgCrop';

function ProfileBox() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const handeInput = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUrl(reader.result);
    };
  };
  return (
    <Container>
      <input id='image' type='file' accept='image/*' onChange={handeInput} />
      <ImgBox htmlFor='image' onClick={() => setOpen(true)}>
        <img src={url} alt='' />
      </ImgBox>
      <UserName>Jay</UserName>
      {open && <ImgCrop setOpen={setOpen} url={url} />}
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

  input {
    display: none;
  }
`;

const ImgBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #eee;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    height: 100%;
  }
`;
const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export default ProfileBox;
