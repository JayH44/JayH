import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { tmdbAxios } from '../../api/tmdbAxios';
import SearchResultItem from './SearchResultItem';

function Search() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState('');
  const timer = useRef(false);

  const handleInput = (e) => {
    const query = e.target.value;
    setInput(query);
    if (!query) {
      setResults('');
      return;
    }
    if (query.length >= 1 && !query.split(' ')[0]) {
      setInput('');
      return;
    }
    // if (!query.split(' ')[query.length - 1]) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(
      () =>
        tmdbAxios
          .get('/search/multi', {
            params: { query },
          })
          .then(({ data }) => setResults(data.results)),
      400
    );
  };

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <Container>
      <Input
        placeholder='검색어를 입력해주세요'
        onChange={handleInput}
        value={input}
        onBlur={() => {
          setTimeout(() => {
            setResults('');
          }, 300);
        }}
      />
      <ResultList>
        {results.length !== 0 ? (
          results.map((result) => (
            <SearchResultItem key={result.id} result={result} />
          ))
        ) : (
          <ResultItem>기본 리스트</ResultItem>
        )}
      </ResultList>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: 1px solid #eee;
  outline: none;
  height: 20px;
  border-radius: 5px;
`;

const ResultList = styled.ul`
  position: absolute;
  width: 100%;
  color: black;
`;

const ResultItem = styled.li``;

export default Search;
