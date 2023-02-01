import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostList() {
  const [posts, setPost] = useState(null);

  const fetchData = () => {
    axios.get('http://localhost:5000/posts').then((res) => {
      setPost(res.data);
    });
  };

  useEffect(() => fetchData(), []);

  if (!posts) return;
  return (
    <Container>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button>
        <Link to='edit'>작성하기</Link>
      </button>
    </Container>
  );
}

const Container = styled.div``;

export default PostList;
