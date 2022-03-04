
import './App.css';
import SearchForm from './SearchForm.jsx';
import ListOfCitys from './ListOfCitys';
/*

const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
      const GKYplanet = GKYplanetPicker(
        Math.round(main.temp),
        Math.round(main.humidity)


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
