import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Button from './Button';

function ImgCrop2({ images, croppedImages, setCroppedImages, setOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cropper, setCropper] = useState();

  useEffect(() => {
    if (!images.length) setOpen(false);
  });
  const handleCrop = () => {
    const croppedImageData = cropper.getCroppedCanvas().toDataURL();
    setCroppedImages([...croppedImages, croppedImageData]);
    setCurrentIndex(currentIndex + 1);

    if (currentIndex + 1 === images.length) {
      setOpen(false);
    }
  };

  return (
    <Background>
      {images.length > 0 && currentIndex < images.length && (
        <Cropper
          src={URL.createObjectURL(images[currentIndex])}
          onInitialized={(instance) => setCropper(instance)}
          style={{ height: 400 }}
          aspectRatio={1}
        />
      )}
      {croppedImages.length > 0 && (
        <Preveiw>
          {croppedImages.map((image, index) => (
            <img key={index} src={image} alt={` ${index}`} />
          ))}
        </Preveiw>
      )}
      {currentIndex === images.length && <p>All images cropped!</p>}
      <Button bgColor='red' width={100} height={30} onClick={handleCrop}>
        Crop
      </Button>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const Preveiw = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px;

  img {
    display: block;
    border: 2px solid black;

    width: 100px;
    height: 100px;
  }
`;

export default ImgCrop2;
