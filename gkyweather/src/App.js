import "./App.css";
import SearchForm from "./SearchForm.jsx";
import ListOfCitys from "./ListOfCitys";
import CityTile from "./CityTile";

function App() {
  // let ListOfCitys = [];

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <SearchForm />

      <br />
      <ListOfCitys />
      <CityTile />
      <CityTile cityName= 'Totot'/>
    </div>
  );
}

export default App;
