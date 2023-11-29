import React, { useState } from 'react';
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  axios.defaults.withCredentials = true;
  const handleLogin = async () => {
    try {

      const response = await axios.post("http://localhost:4000/login", {
        username,
        password
      });
      console.log(response);

    } catch (error) {
      // Error handling for network issues or other errors
      setErrorMessage('Login failed: Internal server error');
      console.error('Login error:', error);
    }


  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
