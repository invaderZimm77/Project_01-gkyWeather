import RunSearch from "../Functions/RunSearch"


export default function SearchButton(props) {

  return (
    <button
      className="search-button"
      onClick={() => RunSearch(props.inputCity)}
    >
      Search
    </button>
  );
}
