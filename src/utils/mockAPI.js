// src/utils/mockAPI.js
const loadPosts = () => {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
  };
  
  const savePosts = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  const deletePost = (id) => {
    const posts = loadPosts();
    const updatedPosts = posts.filter(post => post.id !== id);
    savePosts(updatedPosts);
  };
  
  export { loadPosts, savePosts, deletePost };
  