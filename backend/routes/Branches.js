import React, { useEffect, useState } from 'react';

const Branches = ({ owner, repo }) => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    if (owner && repo) {
      fetch(`http://localhost:5000/api/repositories/${owner}/${repo}/branches`, { credentials: 'include' })
        .then(response => response.json())
        .then(data => setBranches(data))
        .catch(err => console.error(err));
    }
  }, [owner, repo]);

  return (
    <div>
      <h2>Branches for {repo}</h2>
      <ul>
        {branches.map(branch => (
          <li key={branch.name}>{branch.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Branches;
