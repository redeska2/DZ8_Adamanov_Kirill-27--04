import React, { useState } from 'react';

function Post({ post, currentCatImage, description, onEditPost, onDeletePost }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [postDescription, setPostDescription] = useState(description);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEditPost(post.id, { title, description: postDescription });
    setEditing(false);
  };

  const handleDeleteClick = () => {
    onDeletePost(post.id);
  };

  return (
    <div className="post">
      <div className="post-card">
        <div className="card-image-container">
          <img
            src={currentCatImage}
            alt="Cat"
            className="card-cat-image"
          />
        </div>
        <div className="card-content">
          <h3>{post.title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-buttons">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
      {editing && (
        <div className="post-edit">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Post;
