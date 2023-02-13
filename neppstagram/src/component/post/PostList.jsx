import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../../api/auth';
import PostItem from './PostItem';

function PostList() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    getPosts(1).then((res) => setPost(res.data));
  }, []);
  if (posts.legnth === 0) return null;
  return (
    <Container>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  align-items: center; */

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 5px;
  padding: 5px;
`;

export default PostList;
