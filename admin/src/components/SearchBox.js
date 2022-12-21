import React from "react";
import SearchIcon from "../icons/searchIcon.svg";

function SearchBox() {
  return (
    <div className="searchBox">
      <text className="txtname"> Name</text>
      <textarea className="txtareaName"></textarea>
      <button className="searchButton">
        <div>
          <text className="searchtxt">Search</text>
          <div className="searchIcon">
            <img src={SearchIcon} alt="search" width="24" height="24" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default SearchBox;
