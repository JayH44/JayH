import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcPrevious, FcNext } from 'react-icons/fc';

function Slider() {
  const [position, setPosition] = useState(0);

  const handlePosition = (op) => {
    if (position + op >= 0 && position + op <= 2) setPosition(position + op);
    else {
      if (position + op === 3) setPosition(0);
      else if (position + op === -1) setPosition(2);
    }
  };

  useEffect(() => {
    setTimeout(() => handlePosition(1), 5000);
  });

  return (
    <Container>
      <SildeList position={position}>
        <SlideItem bgColor='red'>
          <img src={process.env.PUBLIC_URL + '/img01.jpg'} alt='멍멍이' />
        </SlideItem>
        <SlideItem bgColor='yellow'>
          <img src={process.env.PUBLIC_URL + '/img02.png'} alt='풀장식' />
        </SlideItem>
        <SlideItem bgColor='blue'>
          <img src={process.env.PUBLIC_URL + '/img03.png'} alt='장미장식' />
        </SlideItem>
      </SildeList>
      <div className='btnSlide prev' onClick={() => handlePosition(-1)}>
        <FcPrevious />
      </div>
      <div className='btnSlide next' onClick={() => handlePosition(1)}>
        <FcNext />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 300px;
  background-color: #eee;
  overflow: hidden;
  border: 1px solid black;
  position: relative;

  .btnSlide {
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 100;
    top: 50%;
    cursor: pointer;

    display: flex;
    align-items: center;

    &.prev {
      transform: translateY(-50%);
      left: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    &.next {
      right: 0;
      transform: translateY(-50%);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    svg {
      width: inherit;
      height: inherit;
      opacity: 0.5;
    }
  }
`;

const SildeList = styled.ul`
  display: flex;
  height: inherit;
  transform: ${({ position }) => `translateX(${-position * 100}%)`};
  transition: transform 0.4s;
`;

const SlideItem = styled.li`
  display: flex;
  /* width: 100%;
    flex-shrink: 0; */
  min-width: 100%;

  justify-content: center;
  align-items: center;
  /* background-color: ${({ bgColor }) => bgColor}; */
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export default Slider;
