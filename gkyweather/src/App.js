
import './App.css';
import SearchForm from './SearchForm.jsx';
import ListOfCitys from './ListOfCitys';
/*


App-div
title-comp
search form
    search field
UList of retrieved cities



*/
function App() {
  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <SearchForm/>
      <br/>
      <ListOfCitys/>
    </div>
  );
}

export default App;
