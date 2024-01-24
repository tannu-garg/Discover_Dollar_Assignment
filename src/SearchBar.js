
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Ensure onSearch is a function before calling it
    if (typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search categories"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;

