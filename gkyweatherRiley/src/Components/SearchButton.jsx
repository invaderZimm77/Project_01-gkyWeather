export default function SearchButton({ handleClick }) {
  return (
    <button
      className="search-button"
      onClick={() => {
        console.log("Searching...");
        handleClick();
      }}
    >
      Search
    </button>
  );
}
