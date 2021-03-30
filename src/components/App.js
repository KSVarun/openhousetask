import React, { useState } from 'react';

import '../styles/App.css';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CREDENTIALS from '../constants';

function App() {
  let [searchString, setSearchString] = useState('');
  let [searchResultItems, setSearchResultItems] = useState([]);

  function handleSetSearchKey(event) {
    setSearchString(event.target.value);
  }

  function handleSearch() {
    let url = new URL('https://www.googleapis.com/customsearch/v1');
    let params = {
      key: CREDENTIALS.KEY,
      cx: CREDENTIALS.SEARCH_ENGINE_ID,
      q: searchString
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        setSearchResultItems(result.items);
      });
  }

  function handleClearSearch() {
    setSearchString('');
    setSearchResultItems([]);
  }

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <div className='logo'>
          <img src='' alt='logo'></img>
        </div>
        <SearchBar
          handleSetSearchKey={handleSetSearchKey}
          searchString={searchString}
          handleClearSearch={handleClearSearch}
        />
        <button onClick={handleSearch}>search</button>
      </div>
      <SearchResults searchResults={searchResultItems} />
    </div>
  );
}

export default App;
