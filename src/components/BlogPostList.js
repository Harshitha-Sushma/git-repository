// src/components/BlogPostList.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { loadPosts } from '../utils/mockAPI';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const PostItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
`;

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(loadPosts());
  }, []);

  return (
    <PostContainer>
      {posts.map(post => (
        <PostItem key={post.id}>
          <h2>{post.title}</h2>
          <p>By: {post.author}</p>
          <p>{post.summary}</p>
          <p>{new Date(post.date).toLocaleDateString()}</p>
          <Link to={`/post/${post.id}`}>Read more</Link>
        </PostItem>
      ))}
      <Link to="/add">Add New Post</Link>
    </PostContainer>
  );
};

export default BlogPostList;
