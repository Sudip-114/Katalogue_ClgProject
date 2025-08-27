import React, { useState } from 'react';
import API from '../api/api';

const SocietyPage = () => {
  const [type, setType] = useState('text');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handlePost = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await API.post('/societies/posts', { type, content });
      setMessage('Post added successfully');
      setContent('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to add post');
    }
  };

  return (
    <div>
      <h2>Society Dashboard</h2>
      <form onSubmit={handlePost}>
        <label>
          Post Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="text">Text</option>
            <option value="image">Image URL</option>
            <option value="video">Video URL</option>
            <option value="poll">Poll</option>
            <option value="event">Event</option>
          </select>
        </label>

        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>

        <button type="submit">Add Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SocietyPage;
