import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

async function convertToFile(url, filename) {
  const res = await fetch(url);
  const data = await res.blob();
  const type = url.split(';')[0].split(':').pop();
  return new File([data], filename, { type });
}

function ImgCrop({ setOpen, url, onSubmit, filename }) {
  const [cropper, setCropper] = useState();

  const getCroppedData = async () => {
    const url = cropper.getCroppedCanvas().toDataURL();

    const file = await convertToFile(url, filename);
    onSubmit(file);
    setOpen(false);
  };

  return (
    <Background>
      <Container>
        <Cropper
          style={{ height: 300 }}
          onInitialized={(instance) => setCropper(instance)}
          src={url}
          minCropBoxHeight={100}
          initialAspectRatio={1}
          aspectRatio={1}
        ></Cropper>
      </Container>
      <BtnBox>
        <Button width={100} onClick={getCroppedData}>
          Crop
        </Button>
        <Button width={100} bgColor='#bbb' onClick={() => setOpen(false)}>
          Close
        </Button>
      </BtnBox>
      {/* <PreviewBox>
        <img src={croppedData} alt='' />
      </PreviewBox> */}
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
`;

const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const BtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

export default ImgCrop;
