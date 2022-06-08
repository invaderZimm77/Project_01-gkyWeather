import SearchButton from "./SearchButton";

export default function SearchForm() {
  return (
    <form className="search-form" onSubmit="">
      <input type="text" id="searchBox" placeholder="Search for a city" />
      <SearchButton />
      <span className="msg"></span>
    </form>
  );
}
