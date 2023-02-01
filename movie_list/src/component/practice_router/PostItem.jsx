import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PostEdit from './PostEdit';
import { Link } from 'react-router-dom';

function PostItem() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/posts/' + id);
      setPost(res.data);
    };
    fetchData();
  }, [id, isEditing]);

  if (!post) return;

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container>
      <h1>{post.title} </h1>
      <p>{post.body}</p>

      {!isEditing && (
        <>
          <button onClick={toggleEditing}>여기서 수정하기</button>

          <button>
            <Link to={'../edit?id=' + id}>링크가서 수정하기</Link>
          </button>
        </>
      )}

      {isEditing && (
        <>
          <button onClick={toggleEditing}>수정취소하기</button>
          <PostEdit id={id} toggle={true} toggleEditing={toggleEditing} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div``;

export default PostItem;
