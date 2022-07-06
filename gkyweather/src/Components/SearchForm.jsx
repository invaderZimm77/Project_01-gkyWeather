import React, { useState } from "react";
import SearchButton from "./SearchButton";
import "../SearchForm.css";
import RunSearch from "../App";

const SearchForm = ( ) => {
  const [inputSearchBox, setInputSearchBox] = useState(null);

  const handleChange = (event) => {
    setInputSearchBox(event.target.value);
    console.log("value is:", event.target.value);
  };

  const handleSearch = () => {
    
    console.log( inputSearchBox);
    const newCity = RunSearch(inputSearchBox);

  };

  return (
    <form className="search-form">
      <input
        type="text"
        id="searchBox"
        onChange={handleChange}
        placeholder="Search for a city"
      />
      <SearchButton handleSearch={handleSearch} />
    </form>
  );
}

export default SearchForm