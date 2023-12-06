import React from "react";
import "./style.css";

const SearchBar = ({ handleChange }) => {
  return (
    <input
      type="search"
      name="search"
      className="search-input"
      placeholder="Search Name"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;
