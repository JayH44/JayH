import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostEdit({ id, toggle, toggleEditing }) {
  const [input, setInput] = useState({
    title: '',
    body: '',
  });

  const { title, body } = input;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      if (!title || !body) {
        alert('내용을 입력해 주세요');
        return;
      }

      const res = !toggle
        ? await axios.post('http://localhost:5000/posts', {
            title,
            body,
          })
        : await axios.patch('http://localhost:5000/posts/' + id, {
            title,
            body,
          });
      if (res.status === 201) {
        alert('등록에 성공했습니다.');
        navigate('/post/' + res.data.id);
      }
      if (res.status === 200) {
        alert('수정했습니다.');
        toggleEditing();
      }
    } catch (err) {
      throw new Error('등록에 실패했습니다.');
    }
  };

  return (
    <Container>
      <div>
        <label>
          제목
          <input name='title' onChange={handleInput} type='text' />
        </label>
      </div>
      <div>
        <label>
          내용
          <input name='body' onChange={handleInput} type='text' />
        </label>

        <button onClick={handleSubmit}>
          {!toggle ? '등록하기' : '수정하기'}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default PostEdit;
