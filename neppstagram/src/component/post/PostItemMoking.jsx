import React from 'react';
import styled from 'styled-components';

function PostItemMoking({ posts, delay }) {
  return (
    <>
      {posts.map((post) => (
        <Container key={post.id} delay={delay}>
          <img src='/loding2.svg' alt='Loading'></img>
          <BtnBox>
            <button></button>
          </BtnBox>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  width: 240px;
  height: 240px;
  border: 1px solid ${({ theme }) => theme.colors.bd_color};
  border-radius: 10px;
  animation: skeleton-gradient 1.5s infinite ease-in-out;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.6);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

const BtnBox = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;

  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export default PostItemMoking;
