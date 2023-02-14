import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createPost } from '../../api/auth';
import Button from '../common/Button';
import ImgCrop2 from '../common/ImgCrop2';

async function dataURItoFile(dataURI, filename) {
  const res = await fetch(dataURI);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type });
}

function PostEdit() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [croppedImages, setCroppedImages] = useState([]);
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    console.log(e.target.files);
    setOpen(true);
  };

  function onDrop(e, index) {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text'));
    const draggedImage = croppedImages[draggedIndex];
    const newImages = croppedImages.filter((_, i) => i !== draggedIndex);
    newImages.splice(index, 0, draggedImage);
    setCroppedImages(newImages);
  }

  function onDragStart(e, index) {
    e.dataTransfer.setData('text', index);
  }

  const handleSubmit = async () => {
    const form = new FormData();
    for (let i = 0; i < croppedImages.length; i++) {
      const croppedFile = await dataURItoFile(
        croppedImages[i],
        `cropped-${i}.jpg`
      );
      form.append(`files`, croppedFile);
    }
    form.append('body', text);
    const data = await createPost(form);
    alert(data.body);
    navigate('/post/' + data.id);
  };

  return (
    <>
      <Container>
        <input type='file' id='img' multiple onChange={handleInput} />
        <PreviewBox htmlFor='img'>
          <PreviewBoxWrapper idx={idx}>
            {croppedImages.map((img, idx) => (
              <img key={idx} src={img} alt='c' />
            ))}
          </PreviewBoxWrapper>
          <BtnBox>
            {croppedImages.map((_, idx) => (
              <button key={idx} onClick={() => setIdx(idx)} />
            ))}
          </BtnBox>
        </PreviewBox>
        <InputBody onChange={(e) => setText(e.target.value)} value={text} />
        <Button onClick={handleSubmit} height={30}>
          등록
        </Button>
        <PreveiwSmall>
          {croppedImages.map((image, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => onDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, index)}
            >
              <span>{index + 1}</span>
              <img key={index} src={image} alt={` ${index}`} />
            </div>
          ))}
        </PreveiwSmall>
      </Container>
      {open && (
        <ImgCrop2
          images={images}
          croppedImages={croppedImages}
          setCroppedImages={setCroppedImages}
          setOpen={setOpen}
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
  position: relative;

  input {
    display: none;
  }
`;

const PreviewBox = styled.label`
  width: 300px;
  height: 300px;
  position: relative;

  border: 2px solid ${({ theme }) => theme.colors.bd_color};
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
`;

const PreviewBoxWrapper = styled.div`
  display: flex;
  transform: translateX(${({ idx }) => -idx * 100}%);
  transition: transform 0.5s;
  img {
    display: block;
    width: 100%;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;

  button {
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;

const InputBody = styled.textarea`
  resize: none;
  width: 300px;
  height: 150px;
  border-radius: 10px;
  padding: 10px;
`;

const PreveiwSmall = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 10px;
  margin: 20px;
  cursor: pointer;

  img {
    display: block;
    border: 2px solid black;

    width: 100px;
    height: 100px;
  }
`;

export default PostEdit;
