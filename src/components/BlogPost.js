// src/components/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadPosts } from '../utils/mockAPI';
import { deletePost } from '../utils/mockAPI';

const PostContainer = styled.div`
  padding: 1rem;
`;

const BlogPost = () => {
  const { id } = useParams();
  const posts = loadPosts();
  const post = posts.find(p => p.id === parseInt(id));const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <PostContainer>
      <h1>{post.title}</h1>
      <h3>By: {post.author}</h3>
      <p>{post.content}</p>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <Link to={`/edit/${post.id}`}>Edit</Link>
      <Link to="/">Back to List</Link>
      <button onClick={handleDelete}>Delete</button>
    </PostContainer>
  );
};

export default BlogPost;
