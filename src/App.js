// src/App.js
import React, { useState, useEffect } from 'react';
import Login from './Login';
import User from './User';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user info to check authentication
    fetch('http://localhost:5000/auth/user', { credentials: 'include' })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          setIsAuthenticated(false);
          setLoading(false);
          throw new Error('Not authenticated');
        }
      })
      .then(data => {
        setUser(data.user);
        setIsAuthenticated(true);
        // Fetch repositories after authentication
        return fetch('http://localhost:5000/api/repositories', { credentials: 'include' });
      })
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="main-layout">
          <Sidebar 
            repositories={repositories} 
            onSelectRepo={setSelectedRepo} 
            user={user}
          />
          <div className="content">
            <User user={user} />
            {selectedRepo ? (
              <div className="repo-details">
                <h3>Selected Repository:</h3>
                <p><strong>{selectedRepo.name}</strong></p>
                <p>{selectedRepo.description || 'No description provided.'}</p>
              </div>
            ) : (
              <p style={{ textAlign: 'center' }}>Select a repository from the sidebar to view its details.</p>
            )}
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
