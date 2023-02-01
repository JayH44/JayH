import styled, { css } from 'styled-components';

function TitleBox({ title, tabList }) {
  return (
    <Container>
      <h2>{title}</h2>
      <TabList>
        <TabItem active={true}>오늘</TabItem>
        <TabItem active={false}>이번주</TabItem>
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
  padding: 1px 15px;
  cursor: pointer;
  border-radius: 10px;

  ${({ active }) =>
    active &&
    css`
      background-color: #032541;
      color: white;
    `}
`;

export default TitleBox;
