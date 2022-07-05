import "./App.css";
import SearchForm from "./Components/SearchForm.jsx";
import ListOfCitys from "./Components/ListOfCitys";
import { useState } from "react";

function App() {
  const [cityList, setCityList] = useState([]);

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <section className="search">
        <SearchForm />
      </section>
      <br />
      <ListOfCitys cityList/>
    </div>
  );
}

export default App;
