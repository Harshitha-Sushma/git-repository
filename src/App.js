// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import AddEditPost from './components/AddEditPost';

const App = () => (
  <Router>
    <GlobalStyle />
    <div className="container">
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/add" element={<AddEditPost />} />
        <Route path="/edit/:id" element={<AddEditPost />} />
      </Routes>
    </div>
  </Router>
);

export default App;
