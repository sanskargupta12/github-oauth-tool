import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Redirect to the backend GitHub OAuth endpoint
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: 'Arial, sans-serif',
        color: '#2c3e50'
      }}
    >
      <h1 style={{ marginBottom: '40px' }}>GitHub OAuth App</h1>
      <button
        onClick={handleLogin}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default Login;
