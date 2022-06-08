
import './App.css';
import SearchForm from './SearchForm.jsx';
import ListOfCitys from './ListOfCitys';
import CityTile from './CityTile';

function App() {

  // let ListOfCitys = [];

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <SearchForm/>
      <CityTile/>
      <br/>
      <ListOfCitys/>
    </div>
  );
}

export default App;
