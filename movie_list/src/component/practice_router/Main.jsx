import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Header from './Header';
import Post from './page/Post';
import PostList from './PostList';
import PostItem from './PostItem';
import PostEdit from './PostEdit';

function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post' element={<Post />}>
          <Route path='' element={<PostList />} />
          <Route path=':id' element={<PostItem />} />
          <Route path='edit' element={<PostEdit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Main;
