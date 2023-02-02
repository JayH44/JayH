import styled from 'styled-components';
import { tmdbAxios } from '../api/tmdbAxios';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function MovieDetail() {
  const { pathname } = useLocation();
  const [view, setView] = useState(null);

  useEffect(() => {
    tmdbAxios
      .get(pathname, {
        params: {
          language: 'ko-kr',
        },
      })
      .then(({ data }) => {
        //   console.log(data);
        setView(data);
      });
  }, [pathname]);

  if (!view) return;
  const { title, release_date, overview, poster_path, backdrop_path } = view;
  const img_url = 'https://image.tmdb.org/t/p/w300' + poster_path;
  const backimg_url = 'https://image.tmdb.org/t/p/original' + backdrop_path;

  return (
    <Container url={backimg_url}>
      <Wrapper>
        <ImgBox>
          <img src={img_url} alt={title} />
        </ImgBox>
        <ContentBox>
          <Title>
            {title} <span>({release_date.substr(0, 4)})</span>
          </Title>
          <SummaryBox>
            <h4>개요</h4>
            <p>{overview}</p>
          </SummaryBox>
        </ContentBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px 0;
  background: url(${({ url }) => url}) center / cover no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: multiply;

  /* position: relative;
  z-index: 1;
  &::after {
    background: url(${({ url }) => url}) center / cover no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    position: absolute;
    background-size: 100%;
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
  } */
`;

const Wrapper = styled.div`
  max-width: 900px;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  color: white;
`;

const ImgBox = styled.div`
  width: 300px;
  height: 440px;
  border-radius: 10px;
  overflow: hidden;
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;

  span {
    font-size: 1.7rem;
    font-weight: 500;
    opacity: 0.8;
  }
`;

const SummaryBox = styled.div`
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
  }
  p {
    margin-top: 10px;
    font-size: 1rem;
  }
`;
export default MovieDetail;
