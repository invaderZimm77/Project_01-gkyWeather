export default function SearchButton({ handleSearch }) {
  return (
    <button className="search-button" onClick={() => {
      console.log('...Searching...')
      handleSearch()
    }}>
      Search
    </button>
  );
}
