import SearchButton from "./SearchButton";
import "../SearchForm.css";
import { useState } from "react";
import  RunSearch  from "../App";

export default function SearchForm({cityList}) {
  const [inputSearchBox, setInputSearchBox] = useState(null);

  const handleChange = (event) => {
    setInputSearchBox(event.target.value);
    console.log("value is:", event.target.value);
  };

  const handleSearch = () => {
    console.log(cityList, inputSearchBox);
    const newCity= RunSearch(cityList, inputSearchBox);
    cityList.push(newCity)
    
  }


  return (
    <form className="search-form">
      <input
        type="text"
        id="searchBox"
        onChange={handleChange}
        placeholder="Search for a city"
      />
      <SearchButton onClick={handleSearch} />
      {/* <span className="msg"></span> */}
    </form>
  );
}
