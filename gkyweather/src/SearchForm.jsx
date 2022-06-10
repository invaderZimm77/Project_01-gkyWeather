import SearchButton from "./SearchButton";

import "./SearchForm.css"

export default function SearchForm() {
  return (
    <form className="search-form" onSubmit={SearchButton}>
      <input type="text" id="searchBox" placeholder="Search for a city" />
      <SearchButton />
      <span className="msg"></span>
    </form>
  );
}
