import React from 'react';

import '../styles/SearchResults.css';

function SearchResults({ searchResults = [] }) {
  function renderSearchResultCard() {
    return searchResults.map((searchedResult) => {
      return (
        <div className='results-card' key={searchedResult.cacheId}>
          <div className='logo'>
            <img src='' alt='logo'></img>
          </div>
          <div className='content'>
            <div className='link'>{searchedResult.link}</div>
            <div className='title'>{searchedResult.title}</div>
            <div className='description'>{searchedResult.snippet}</div>
          </div>
        </div>
      );
    });
  }
  return <div className='search-results'>{renderSearchResultCard()}</div>;
}

export default SearchResults;
