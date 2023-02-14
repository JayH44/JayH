import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { createComment, getPostbyId } from '../../api/auth';
import Button from '../common/Button';
import InputBox from '../common/InputBox';

function PostDetail({ parentId }) {
  const [opacity, setOpacity] = useState(0);
  const [post, setPost] = useState('');
  const { author, img_list } = post;
  const { id } = useParams();
  const [idx, setIdx] = useState(0);
  const [mouseDownX, setmouseDownX] = useState(0);
  const navigate = useNavigate();
  const useId = parentId || id;
  const [comment, setComment] = useState('');

  useEffect(() => {
    getPostbyId(useId).then((res) => {
      setPost(res.data);
    });
  }, [useId]);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 200);
  }, []);

  const handleIndex = (idx) => {
    setIdx(idx);
  };

  const onMouseDown = (e) => {
    setmouseDownX(e.pageX);
  };

  const onMouseUp = (e) => {
    if (mouseDownX - e.pageX > 0) {
      if (idx === img_list.length - 1) return;
      setIdx(idx + 1);
    } else if (mouseDownX - e.pageX < 0) {
      if (idx === 0) return;
      setIdx(idx - 1);
    } else {
      setIdx(idx);
    }
  };

  const handleOnClick = (id) => {
    navigate('/users/' + id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment === '') return;
    if (window.confirm('댓글을 등록하시겠습니까?')) {
      const form = new FormData();
      form.append('body', comment);
      createComment(useId, form).then((res) => console.log(res));
    }
  };

  if (!post) return;

  return (
    <Container opacity={opacity}>
      <HeaderWrapper>
        <LeftBox>
          <img src={author.profile_url} alt={author.name} />
          <span onClick={() => handleOnClick(author.id)}>{author.name}</span>
        </LeftBox>
        <RightBox>
          <div></div>
          <div></div>
          <div></div>
        </RightBox>
      </HeaderWrapper>
      <ImgBox onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        <ImgWrapper idx={idx} multi={img_list.length > 1}>
          {img_list.map((item) => (
            <img key={item.id} src={item.url} alt='' />
          ))}
        </ImgWrapper>
        <BtnBox>
          {img_list.map((item, idx) => (
            <button key={item.id} onClick={() => handleIndex(idx)}></button>
          ))}
        </BtnBox>
      </ImgBox>
      <span>{post.body}</span>
      <InputBox placeholder='댓글창' active={comment.length > 0}>
        <input
          type='text'
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
      </InputBox>
      <Button type='button' onClick={handleSubmit}>
        댓글등록
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 1s;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 10px;
  height: 40px;
  padding: 5px;
  overflow: hidden;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
  height: 40px;
  overflow: hidden;
  img {
    height: 100%;
    border-radius: 50%;
  }

  span {
    cursor: pointer;
  }
`;

const RightBox = styled.div`
  display: flex;
  gap: 2px;
  padding-right: 5px;
  cursor: pointer;

  div {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: black;
  }
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  display: flex;
  min-width: 100%;

  img {
    min-width: 100%;
    -webkit-user-drag: none;
  }

  ${({ multi }) =>
    multi &&
    css`
      transform: translateX(${({ idx }) => -idx * 100}%);
      transition: transform 0.5s;
    `}
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translateX(-50%);
  width: 100%;
  height: 40px;

  button {
    background-color: rgba(0, 0, 0, 0.7);
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default PostDetail;
