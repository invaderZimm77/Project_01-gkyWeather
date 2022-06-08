import "./App.css";
import SearchForm from "./SearchForm.jsx";
import ListOfCitys from "./ListOfCitys";

function App() {
  // let ListOfCitys = [];

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <SearchForm />

      <br />
      <ListOfCitys />
      
    </div>
  );
}

export default App;
