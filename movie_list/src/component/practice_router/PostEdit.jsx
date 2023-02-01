import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

function PostEdit({ id, toggle, toggleEditing }) {
  const [searchParmas] = useSearchParams();
  const postId = searchParmas.get('id');
  const newId = id || postId;

  const [input, setInput] = useState({
    title: '',
    body: '',
  });

  useEffect(() => {
    if (newId) {
      axios
        .get('http://localhost:5000/posts/' + newId)
        .then(({ data }) => setInput(data))
        .catch(console.log);
    }
  }, [newId]);

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

      const url = `http://localhost:5000/posts/${newId || ''}`;
      const method = newId ? 'patch' : 'post';
      const res = await axios[method](url, {
        title,
        body,
      });

      if (res.status === 201) {
        alert('등록에 성공했습니다.');
      }
      if (res.status === 200) {
        alert('수정했습니다.');
        id && toggleEditing();
      }
      navigate('/post/' + res.data.id);
    } catch (err) {
      throw new Error('등록에 실패했습니다.');
    }
  };

  return (
    <Container>
      <div>
        <label>
          제목
          <input
            name='title'
            value={input.title}
            onChange={handleInput}
            type='text'
          />
        </label>
      </div>
      <div>
        <label>
          내용
          <input
            name='body'
            value={input.body}
            onChange={handleInput}
            type='text'
          />
        </label>

        <button onClick={handleSubmit}>
          {!toggle && !postId ? '등록하기' : '수정하기'}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div``;

export default PostEdit;
