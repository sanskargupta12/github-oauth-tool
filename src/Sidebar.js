// src/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ repositories, onSelectRepo }) => {
  return (
    <div className="sidebar">
      <h2>Repositories</h2>
      {repositories.length > 0 ? (
        <ul>
          {repositories.map(repo => (
            <li key={repo.id} onClick={() => onSelectRepo(repo)}>
              {repo.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
};

export default Sidebar;
