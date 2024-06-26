// src/components/AddEditPost.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { loadPosts, savePosts } from '../utils/mockAPI';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const AddEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = loadPosts();
  const existingPost = posts.find(post => post.id === parseInt(id));

  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [author, setAuthor] = useState(existingPost ? existingPost.author : '');
  const [content, setContent] = useState(existingPost ? existingPost.content : '');
  const [date, setDate] = useState(existingPost ? existingPost.date : new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: existingPost ? existingPost.id : Date.now(), title, author, content, date };
    const updatedPosts = existingPost ? posts.map(post => post.id === existingPost.id ? newPost : post) : [...posts, newPost];
    savePosts(updatedPosts);
    navigate('/');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Save Post</button>
    </FormContainer>
  );
};

export default AddEditPost;
