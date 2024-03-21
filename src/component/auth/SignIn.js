import React, { useState } from 'react';
import '../../css/login.css'

const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Submitted:', { email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Welcome to Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Input is required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Input is required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
