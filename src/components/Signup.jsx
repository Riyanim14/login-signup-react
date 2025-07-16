import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      alert('All fields are required');
      return;
    }
    if (password !== confirm) {
      alert('Passwords do not match');
      return;
    }
    alert(`Signup successful\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSignup} style={{ marginTop: '20px' }}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0' }}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
        style={{ display: 'block', margin: '10px 0' }}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;