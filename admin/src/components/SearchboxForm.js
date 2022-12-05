import React from "react";

function SearchboxForm() {
  return (
    <div className="searchBoxContainer">
      <div className="text-for-search-name">
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <br></br>
        </form>
      </div>
      <button className="searchButton">Search</button>
    </div>
  );
}

export default SearchboxForm;
