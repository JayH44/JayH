import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function SearchResult({ results, opacity, onBlur }) {
  const [op, setOp] = useState(0);
  useEffect(() => {
    if (opacity) {
      setTimeout(() => {
        setOp(opacity);
      }, 100);
    }
    if (onBlur) {
      setOp(0);
    }
  }, [opacity, onBlur]);
  return (
    <Container op={op}>
      {results.map((res) => (
        <li key={res.id}>
          <img src={res.profile_url} alt='' />
          <span>{res.name}</span>
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 200px;
  z-index: 10;
  top: 40px;
  left: 150px;
  border-radius: 10px;
  opacity: ${({ op }) => op};
  transition: opacity 0.5s;

  li {
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 35px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
    gap: 10px;
    padding: 5px;

    img {
      width: 25px;
      height: 25px;
      border: none;
      border-radius: 50%;
    }
  }
`;

export default SearchResult;
