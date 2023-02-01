import React from 'react';
import Header from './component/movie_list/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Movie from './page/Movie';
import Tv from './page/Tv';
import Person from './page/Person';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/person' element={<Person />} />
      </Routes>
    </Router>
  );
}

export default App;
