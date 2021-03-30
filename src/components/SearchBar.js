import React from 'react';

import '../styles/SearchBar.css';

function SearchBar({ handleSetSearchKey, searchString, handleClearSearch }) {
  return (
    <div className='search-bar'>
      <div className='search-icon'>
        <div className='circle'> </div>
        <div className='bottomLine'></div>
      </div>
      <input
        className='search'
        type='text'
        value={searchString}
        onChange={handleSetSearchKey}
      ></input>
      <div className='cancle-icon' onClick={handleClearSearch}>
        X
      </div>
    </div>
  );
}

export default SearchBar;
