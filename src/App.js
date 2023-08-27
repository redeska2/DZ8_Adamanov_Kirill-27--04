import React, { useState } from 'react';
import './index.css'; 
import Post from '../src/components/post';
import AddPost from '../src/components/addPost';

function App() {
  const [posts, setPosts] = useState([]);
  const [currentCatImage, setCurrentCatImage] = useState('https://cataas.com/cat');
  const [usedImages, setUsedImages] = useState([]);

  const addPost = (newPost, newImage) => {
    setPosts([...posts, newPost]);
    setCurrentCatImage(newImage);
    setUsedImages([...usedImages, newImage]);
  };

  const editPost = (postId, updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, ...updatedPost } : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="app">
      <h1>Cats API</h1>
      <AddPost
        onAddPost={addPost}
        currentCatImage={currentCatImage}
        setCurrentCatImage={setCurrentCatImage}
        usedImages={usedImages}
      />
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            currentCatImage={post.image}
            description={post.description}
            onEditPost={editPost}
            onDeletePost={deletePost}
          />
        ))}
      </div>
    </div>
  );
}

export default App;