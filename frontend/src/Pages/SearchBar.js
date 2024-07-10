import { useState } from 'react';
import '../Pages/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='search-container'>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
