import React, { useState } from "react";
import SearchIcon from "../icons/searchIcon.svg";

function SearchBox({ initialData, tableData, setTableData }) {
  const [searchText, setSearchText] = useState("");

  const onSearch = () => {
    if (!searchText) {
      setTableData(initialData);
      return;
    }

    let filteredData = tableData.filter((element) =>
      element?.name?.toLowerCase()?.includes(searchText)
    );
    setTableData(filteredData);
  };

  return (
    <div className="searchBox">
      <text className="txtname"> Name</text>
      {/* <textarea
        className="txtareaName"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      ></textarea> */}
      <input
        type="text"
        className="txtareaName"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      ></input>

      <button className="searchButton" onClick={onSearch}>
        <div>
          <text className="searchtxt">Search</text>
          <div className="searchIcon">
            <img
              src={SearchIcon}
              alt="search"
              width="24"
              height="24"
              color="white"
            />
          </div>
        </div>
      </button>
    </div>
  );
}

export default SearchBox;
