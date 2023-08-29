import React, { useState } from 'react';
import '../index.css'; 



function AddPost({ onAddPost, currentCatImage, setCurrentCatImage, usedImages }) {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(''); // Добавили переменную image

  const getRandomCatImage = async () => {
    const response = await fetch('https://cataas.com/cat', {
      method: 'GET',
    });

    if (response.ok) {
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl); // Устанавливаем значение переменной image
    } else {
      return null;
    }
  };

  const handleAddClick = async () => {
    await getRandomCatImage();

    if (!image) {
      alert('Failed to fetch new cat image.');
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title,
      description: comment, // Используем значение comment для комментариев
      image: image,
    };

    onAddPost(newPost, image);
    setCurrentCatImage(image);
    setTitle('');
    setComment('');
  };

  return (
    <div className="add-post">
      <div className="image-container">
        <img src={image || currentCatImage} alt="Cat" className="cat-image-big" />
      </div>
      <div className="post-details">
        <input
          type="text"
          placeholder="Add title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add your comments here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddClick}>Add Post</button>
      </div>
    </div>
  );
}

export default AddPost;