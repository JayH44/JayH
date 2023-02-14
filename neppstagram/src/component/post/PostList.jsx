import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../../api/auth';
import PostItem from './PostItem';
import PostItemMoking from './PostItemMoking';

function PostList() {
  const [posts, setPost] = useState([]);
  const [op, setOp] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const delay = 2000;
  useEffect(() => {
    getPosts(1).then((res) => setPost(res.data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  useEffect(() => {
    if (!isLoading) setOp(1);
  }, [isLoading]);

  if (posts.legnth === 0) return null;
  return (
    <Container>
      {!isLoading ? (
        posts.map((post) => <PostItem key={post.id} post={post} op={op} />)
      ) : (
        <PostItemMoking posts={posts} delay={delay} />
      )}
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
