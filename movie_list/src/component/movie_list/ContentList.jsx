import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tmdbAxios } from '../../api/tmdbAxios';
import ContentItem from './ContentItem';
import TitleBox from './TitleBox';

function ContentList({ title, filter, leng }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    tmdbAxios
      .get(filter[0].url, {
        params: { language: leng },
      })
      .then(({ data }) => setState(data.results));
  }, [filter, leng]);
  if (!state) return;

  return (
    <Container>
      <TitleBox title={title} filter={filter} setState={setState} />
      <ItemList>
        {state.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </ItemList>
    </Container>
  );
}

const Container = styled.div``;
const ItemList = styled.ul`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  overflow-x: auto;
`;

export default ContentList;
