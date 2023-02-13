import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function PostItem({ post }) {
  const [idx, setIdx] = useState(0);
  const [mouseDownX, setMouseDownX] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const imgLength = post.img_list.length;

  const handleMouseDown = (e) => {
    setMouseDownX(e.pageX);
  };

  const handleMouseUp = (e) => {
    if (mouseDownX - e.pageX > 0) {
      if (idx === imgLength - 1) return;
      setIdx(idx + 1);
      setIsDrag(true);
    } else if (mouseDownX - e.pageX < 0) {
      if (idx === 0) return;
      setIdx(idx - 1);
      setIsDrag(true);
    } else {
      setIdx(idx);
      setIsDrag(false);
    }
  };

  const handleClick = (e) => {
    if (isDrag) e.preventDefault();
  };

  return (
    <ImgBox onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <ImageWrapper idx={idx} multi={imgLength > 1}>
        {imgLength > 0 && (
          <Link to={'' + post.id} onClick={handleClick}>
            {post.img_list.map((img, idx) => (
              <img key={img.id} src={img.url} alt='' />
            ))}
          </Link>
        )}
      </ImageWrapper>
      <BtnBox idx={idx}>
        {post.img_list.map((img, idx) => (
          <button key={img.id} onClick={() => setIdx(idx)}></button>
        ))}
      </BtnBox>
    </ImgBox>
  );
}

const ImgBox = styled.li`
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.bd_color};
  border-radius: 10px;

  a {
    display: flex;
    flex-direction: row;
    -webkit-user-drag: none;
  }

  a img {
    width: 100%;
    -webkit-user-drag: none;
  }
`;

const ImageWrapper = styled.div`
  ${({ multi }) =>
    multi &&
    css`
      transform: translateX(-${({ idx }) => idx * 100}%);
      transition: transform 0.5s;
    `}
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
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

export default PostItem;
