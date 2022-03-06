import React from 'react';
import logo from '../../images/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className="nav-container">
      <div className="line_top"></div>
      <div className="nav">
        <img className="logo" src={logo} alt="Timescale" />
        <SearchBar
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
        />
      </div>
      <div className="line_btm"></div>
    </div>
  );
};

export default NavBar;