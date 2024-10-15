// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { createPost } from '../services/postService';
import './CreatePost.css'; // Import CSS for styling

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content };
    await createPost(postData);
    setTitle('');
    setContent('');
  };

  return (
    <div className="create-post-container">
      <h2>Create a Thread</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title / Description:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the thread title"
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter thread content"
          />
        </div>
        <button type="submit">Create Thread</button>
      </form>
    </div>
  );
};

export default CreatePost;
