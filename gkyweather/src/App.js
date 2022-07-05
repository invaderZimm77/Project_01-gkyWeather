import "./App.css";
import SearchForm from "./Components/SearchForm.jsx";
import ListOfCitys from "./Components/ListOfCitys";

function App() {
   let cities = [];

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <section className="search">
        <SearchForm />
      </section>
      <br />
      <ListOfCitys
       />
    </div>
  );
}

export default App;
