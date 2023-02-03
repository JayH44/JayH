import styled from 'styled-components';
import ContentList from '../component/movie_list/ContentList';

const filters = {
  trend: [
    { id: 1, text: 'Today', url: 'trending/all/day', active: true },
    { id: 2, text: 'This Week', url: 'trending/all/week', active: false },
  ],

  popular: [
    { id: 1, text: 'TV', url: 'tv/popular', active: true },
    { id: 2, text: 'MOVIE', url: 'movie/popular', active: false },
    { id: 3, text: 'PEOPLE', url: 'person/popular', active: false },
  ],
};

function Home({ leng }) {
  return (
    <Container>
      <ContentList
        title={leng === 'ko-kr' ? '트렌딩' : 'Trending'}
        filter={filters.trend}
        leng={leng}
      />
      <ContentList
        title="What's Popular?"
        filter={filters.popular}
        leng={leng}
      />
      {/* <ContentList title='Free to Watch' /> */}
    </Container>
  );
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default Home;
