import React, { useState } from 'react';
import styled from 'styled-components';
import { createPost } from '../../api/auth';
import Button from '../common/Button';
import ImgCrop from '../common/ImgCrop';

function PostEdit() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState({
    url: '',
    filename: '',
  });
  const [text, setText] = useState('');

  const handleInput = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage({
        url: reader.result,
        filename: e.target.files[0].name,
      });
    };
    setOpen(true);
  };

  const handleImgae = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage({
        ...image,
        url: reader.result,
      });
    };
  };

  const handleSubmit = async () => {
    const form = new FormData();
    form.append('files', file);
    form.append('body', text);
    const data = await createPost(form);
    console.log(data);
  };

  return (
    <>
      <Container>
        <input type='file' id='img' onChange={handleInput} />
        <PreviewBox htmlFor='img'>
          <img src={image.url} alt='' />
        </PreviewBox>
        <InputBody onChange={(e) => setText(e.target.value)} value={text} />
        <Button onClick={handleSubmit}>등록</Button>
      </Container>
      {open && (
        <ImgCrop
          setOpen={setOpen}
          url={image.url}
          filename={image.filename}
          onSubmit={handleImgae}
        />
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input {
    display: none;
  }
`;

const PreviewBox = styled.label`
  width: 200px;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.bd_color};
  cursor: pointer;
  overflow: hidden;
  img {
    height: 100%;
  }
`;

const InputBody = styled.textarea`
  resize: none;
  width: 200px;
  height: 100px;
`;

export default PostEdit;
