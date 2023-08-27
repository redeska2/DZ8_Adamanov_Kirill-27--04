import React, { useState } from 'react';

function AddPost({
  onAddPost,
  currentCatImage,
  setCurrentCatImage,
  usedImages,
}) {
  const [title, setTitle] = useState('');

  const handleAddClick = () => {
    const newImage = 'https://cataas.com/cat';
    if (!usedImages.includes(newImage)) {
      setCurrentCatImage(newImage); // Обновляем изображение сразу
      const newPost = {
        id: Date.now(),
        title,
        description: '',
        image: newImage,
      };
      onAddPost(newPost, newImage);
      setTitle('');
    } else {
      alert('This image is already used. Please add a new one.');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setCurrentCatImage('https://cataas.com/cat');
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <div className="image-container">
        <img src={currentCatImage} alt="Cat" className="cat-image" />
        <div className="card">
          <h3>{title}</h3>
          <div className="card-image-container">
            <img
              src={currentCatImage}
              alt="Cat"
              className="card-cat-image"
            />
          </div>
        </div>
      </div>
      <button onClick={handleAddClick}>Add Post</button>
    </div>
  );
}

export default AddPost;
