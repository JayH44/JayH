import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { patchProfile } from '../../api/auth';
import { fetchCurrentUser } from '../../redux/user';
import ImgCrop from '../common/ImgCrop';

function ProfileBox() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [filename, setFilename] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handeInput = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUrl(reader.result);
      setFilename(e.target.files[0].name);
    };
  };

  const handleSubmit = async (file) => {
    const form = new FormData();
    form.append('profile', file);
    await patchProfile(form);
    dispatch(fetchCurrentUser());
    setOpen(false);
  };

  return (
    <Container>
      <input id='image' type='file' accept='image/*' onChange={handeInput} />
      <ImgBox htmlFor='image' onClick={() => setOpen(true)}>
        <img src={user.data.profile_url} alt='' />
      </ImgBox>
      <UserName>{user.data.name}</UserName>
      {open && (
        <ImgCrop
          setOpen={setOpen}
          url={url}
          onSubmit={handleSubmit}
          filename={filename}
        />
      )}
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
