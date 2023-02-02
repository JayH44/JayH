import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ContentItem({ item }) {
  const {
    id,
    title,
    name,
    release_date,
    first_air_date,
    poster_path,
    profile_path,
  } = item;
  const img_url =
    'https://image.tmdb.org/t/p/w154' + (poster_path ?? profile_path);

  const type = title ? 'movie' : profile_path ? 'person' : 'tv';

  return (
    <Container>
      <Link to={`${type}/${id}`}>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
        <Title>{title ?? name}</Title>
        <ReleaseDate>{release_date ?? first_air_date}</ReleaseDate>
      </Link>
    </Container>
  );
}

const Container = styled.li``;

const ImgBox = styled.div`
  width: 150px;
  height: 225px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 700;
`;

const ReleaseDate = styled.span`
  margin-top: 5px;
  font-size: 0.8rem;
  color: #999;
`;
export default ContentItem;
