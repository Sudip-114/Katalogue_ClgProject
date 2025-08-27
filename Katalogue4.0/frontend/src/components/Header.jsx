import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px', backgroundColor: '#2a4d2a', color: 'white' }}>
      <span style={{ marginRight: '15px' }}>Welcome, {user.name || user.role}</span>
      <button
        onClick={logout}
        style={{
          backgroundColor: 'white',
          color: '#2a4d2a',
          border: 'none',
          padding: '6px 12px',
          cursor: 'pointer',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
