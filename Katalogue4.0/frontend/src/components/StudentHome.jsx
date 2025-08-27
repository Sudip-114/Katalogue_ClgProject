import React, { useEffect, useState } from 'react';
import API from '../api/api';

const StudentHome = () => {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const res = await API.get('/societies');
        setSocieties(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchSocieties();
  }, []);

  if (loading) return <div>Loading societies...</div>;

  return (
    <div>
      <h2>Approved Societies</h2>
      {societies.length === 0 && <p>No societies found.</p>}
      <ul>
        {societies.map((society) => (
          <li key={society._id}>
            <h3>{society.name}</h3>
            {society.posts.length === 0 ? (
              <p>No posts yet.</p>
            ) : (
              <ul>
                {society.posts.map((post, index) => (
                  <li key={index}>
                    <strong>{post.type.toUpperCase()}</strong>: {post.content}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentHome;
