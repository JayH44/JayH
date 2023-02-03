import { useState } from 'react';
import styled, { css } from 'styled-components';
import { tmdbAxios } from '../../api/tmdbAxios';

function TitleBox({ title, filter, setState }) {
  const [filterList, setFilterList] = useState(filter);
  const handleFilter = (id) => {
    setFilterList(
      filterList.map((filter) =>
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );

    const { url } = filterList.find((filter) => filter.id === id);
    tmdbAxios.get(url).then(({ data }) => setState(data.results));
  };

  return (
    <Container>
      <h2>{title}</h2>
      <TabList>
        {filterList.map((filter) => (
          <TabItem
            key={filter.id}
            active={filter.active}
            onClick={() => handleFilter(filter.id)}
          >
            {filter.text}
          </TabItem>
        ))}
      </TabList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  h2 {
    font-size: 1.2rem;
  }
`;

const TabList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
`;

const TabItem = styled.li`
  padding: 2px 15px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color, color 0.8s;

  ${({ active }) =>
    active &&
    css`
      background-color: #032541;
      color: white;
    `}
`;

export default TitleBox;
