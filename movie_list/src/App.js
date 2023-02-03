import React, { useState } from 'react';
import Header from './component/movie_list/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Movie from './page/Movie';
import Tv from './page/Tv';
import Person from './page/Person';
import MovieDetail from './page/MovieDetail';
import { tmdbAxios } from './api/tmdbAxios';

function App() {
  const [leng, setLeng] = useState('ko-kr');
  const handleLeng = (text) => {
    setLeng(text);
    tmdbAxios.defaults.params.language = leng;
  };
  return (
    <Router>
      <Header handleLeng={handleLeng} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/person' element={<Person />} />
      </Routes>
    </Router>
  );
}

export default App;
