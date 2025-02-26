import React, { useEffect, useState } from 'react';

const Repositories = ({ onSelectRepo }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/repositories', { credentials: 'include' })
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your Repositories</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} onClick={() => onSelectRepo(repo)} style={{ cursor: 'pointer' }}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repositories;
