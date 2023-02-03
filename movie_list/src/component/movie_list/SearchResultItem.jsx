import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GrMonitor } from 'react-icons/gr';
import { BiMovie } from 'react-icons/bi';
import { BsPersonCircle } from 'react-icons/bs';

function SearchResultItem({ result }) {
  const url = result.media_type + '/' + result.id;

  return (
    <Container key={result.id}>
      <Link to={url}>
        {result.media_type === 'tv' ? (
          <GrMonitor />
        ) : result.media_type === 'movie' ? (
          <BiMovie />
        ) : (
          <BsPersonCircle />
        )}{' '}
        {(result.title || result.name).substr(0, 10)}
      </Link>
    </Container>
  );
}

const Container = styled.li`
  background-color: white;
  cursor: pointer;
  font-size: 0.9rem;
  height: 25px;
  padding-top: 5px;
  z-index: 100;

  &:hover {
    background-color: #eee;
  }

  ${({ Link }) => Link} {
    a {
      display: block;
    }
  }
`;

export default SearchResultItem;
