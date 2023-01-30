import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function Section() {
  const [position, setPosition] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleIndex = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;
      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
      if (e.deltaY > 0) {
        if (position + 1 <= 2) setPosition(position + 1);
      } else {
        if (position - 1 >= 0) setPosition(position - 1);
      }
    };

    window.addEventListener('wheel', handleIndex, { passive: false });
    window.scrollTo({ top: window.innerHeight * position, behavior: 'smooth' });

    return () => {
      window.removeEventListener('wheel', handleIndex, { passive: false });
    };
  }, [position]);

  return (
    <Container>
      <SectionItem bgColor='red'>1</SectionItem>
      <SectionItem bgColor='blue'>2</SectionItem>
      <SectionItem bgColor='yellow'>3</SectionItem>
      <ButtonWrapper position={position}>
        <li onClick={() => setPosition(0)}></li>
        <li onClick={() => setPosition(1)}></li>
        <li onClick={() => setPosition(2)}></li>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div``;

const SectionItem = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;
  background-color: ${({ bgColor }) => bgColor};
`;

const ButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  li:nth-of-type(1) {
    background-color: ${({ position }) =>
      position === 0 && 'rgba(255, 255, 255, 0.4)'};
  }

  li:nth-of-type(2) {
    background-color: ${({ position }) =>
      position === 1 && 'rgba(255, 255, 255, 0.4)'};
  }

  li:nth-of-type(3) {
    background-color: ${({ position }) =>
      position === 2 && 'rgba(255, 255, 255, 0.4)'};
  }
`;

export default Section;
