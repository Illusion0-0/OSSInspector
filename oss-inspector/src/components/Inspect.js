import React from 'react';

const Inspect = () => {
  return (
    <div className="container">
      <div className="search-box">
        <input type="text" className="search-input" placeholder="Search.." />

        <button className="search-button">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  );
};

export default Inspect;
