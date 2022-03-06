import React from 'react';
import './SearchBar.css';
import searchIcon from '../../images/searchIcon.svg';

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <form action="" onSubmit={props.handleSubmit}>
        <div className="search-input">
          <img src={searchIcon} alt="" />
          <input
            placeholder="Search for a movie"
            type="text"
            onChange={props.handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
