import React, { useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user info from the backend
    fetch('http://localhost:5000/auth/user', {
      credentials: 'include', // Ensures cookies are sent
    })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
        Loading user information...
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '50px auto',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1 style={{ marginBottom: '20px', color: '#2c3e50' }}>Welcome, {user.username}!</h1>
      <img
        src={user.photos[0].value}
        alt="User Avatar"
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          border: '3px solid #3498db'
        }}
      />
      <p style={{ marginTop: '15px', fontSize: '16px', color: '#7f8c8d' }}>ID: {user.id}</p>
      <a
        href="http://localhost:5000/auth/logout"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#e74c3c',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Logout
      </a>
    </div>
  );
};

export default User;
