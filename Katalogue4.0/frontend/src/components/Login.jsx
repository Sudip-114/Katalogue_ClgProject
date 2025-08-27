import React, { useState, useContext } from 'react';
import API from '../api/api';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (role === 'student') {
        // Direct login for students without backend call
        login({ role: 'student', name: 'Student', token: null });
      } else {
        const response = await API.post('/auth/login-society', { name, password });
        login({ role, name, token: response.data.token });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Katalogue</h2>
      <form onSubmit={handleSubmit}>
        <label>
          I am a:
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setName('');
              setPassword('');
              setError('');
            }}
          >
            <option value="student">Student</option>
            <option value="society">Society Head</option>
          </select>
        </label>

        {role === 'society' && (
          <>
            <label>
              Society Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={role === 'society'}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={role === 'society'}
              />
            </label>
          </>
        )}

        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
