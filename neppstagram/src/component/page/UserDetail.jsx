import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPostsbyUserId } from '../../api/auth';
import PostDetail from '../post/PostDetail';

function UserDetail() {
  const { id } = useParams();
  const [posts, setPosts] = useState('');

  useEffect(() => {
    getPostsbyUserId(1, id).then((res) => setPosts(res.data));
  }, [id]);

  if (!posts) return <div>목록 없음</div>;

  return (
    <Container>
      {posts.length > 0 ? (
        posts.map((post) => <PostDetail key={post.id} parentId={post.id} />)
      ) : (
        <div>목록 없음</div>
      )}
    </Container>
  );
}

const Container = styled.div``;

export default UserDetail;
