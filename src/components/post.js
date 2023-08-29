import React, { useState } from 'react';
import '../index.css'; 

function Post({ post, currentCatImage, onEditPost, onDeletePost }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(post.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEditPost(post.id, { description: editedDescription });
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDeletePost(post.id);
  };

  return (
    <div className="post-card">
      <div className="image-container">
        <img src={post.image || currentCatImage} alt="Cat" className="cat-image" />
      </div>
      <div className="post-details">
        {isEditing ? (
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <h3>{post.title}</h3>
        )}
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default Post;
