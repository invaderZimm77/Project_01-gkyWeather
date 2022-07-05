import RunSearch from '..Components/RunSearch.js'


export default function SearchButton(props) {
  //verifying that the query isn't already in the list of city
  //retrieve valid city's data.
  //use data to determine geeky Planet to associate with givin city
  //add retrieved city to listOfCitys.
  //reset form
  //else
  //alert user that its not a valid city

  return (
    <button
      className="search-button"
      onClick={() => RunSearch(props.inputCity)}
    >
      Search
    </button>
  );
}
