import SearchButton from "./SearchButton";
import "../SearchForm.css";
import { useState } from "react";

export default function SearchForm() {
  const [inputSearchBox, setInputSearchBox] = useState(null);

  const handleChange = (event) => {
    setInputSearchBox(event.target.value);
    console.log("value is:", event.target.value);
  };

  return (
    <form className="search-form" onSubmit={SearchButton}>
      <input
        type="text"
        id="searchBox"
        onChange={handleChange}
        placeholder="Search for a city"
      />
      <SearchButton inputCity={inputSearchBox} />
      <span className="msg"></span>
    </form>
  );
}
