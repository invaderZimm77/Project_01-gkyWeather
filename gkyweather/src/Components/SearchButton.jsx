export default function SearchButton({ RunSearch }) {
  return (
    <button
      className="search-button"
      onClick={() => {
        console.log("Searching...");
        RunSearch();
      }}
    >
      Search
    </button>
  );
}
