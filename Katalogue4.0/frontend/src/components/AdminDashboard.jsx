import React, { useEffect, useState } from 'react';
import API from '../api/api';

const AdminDashboard = () => {
  const [pending, setPending] = useState([]);
  const [message, setMessage] = useState('');

  const fetchPending = async () => {
    try {
      const res = await API.get('/admin/pending');
      setPending(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const approveSociety = async (id) => {
    setMessage('');
    try {
      await API.put(`/admin/approve/${id}`);
      setMessage('Society approved');
      fetchPending();
    } catch (err) {
      setMessage('Approval failed');
    }
  };

  return (
    <div>
      <h2>Admin - Pending Societies</h2>
      {pending.length === 0 ? <p>No pending societies.</p> : (
        <ul>
          {pending.map((society) => (
            <li key={society._id}>
              {society.name}
              <button onClick={() => approveSociety(society._id)}>Approve</button>
            </li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminDashboard;
