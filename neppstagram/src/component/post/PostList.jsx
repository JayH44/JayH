import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../../api/auth';

function PostList() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    getPosts(1).then((res) => setPost(res.data));
  }, []);
  console.log(posts);
  if (posts.legnth === 0) return null;
  return (
    <Container>
      {posts.map((post) => (
        <ImgBox key={post.id}>
          {post.img_list.length > 0 && (
            <Link to={'' + post.id}>
              <img src={post.img_list[0].url} alt='' />
            </Link>
          )}
        </ImgBox>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgBox = styled.li`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.bd_color};

  img {
    width: 100%;
  }
`;

export default PostList;
