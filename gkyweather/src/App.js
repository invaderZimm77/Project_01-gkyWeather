
import './App.css';
import SearchForm from './SearchForm.jsx';
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
    </div>
  );
}

export default App;
