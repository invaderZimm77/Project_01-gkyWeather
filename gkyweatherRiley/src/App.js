import "./App.css";
import SearchForm from "./Components/SearchForm.jsx";
import ListOfCities from "./Components/ListOfCities";
import React, { useState } from "react";
import CityTile from "./Components/CityTile";
import GKYplanetPicker from "./Functions/GKYplanetPicker";

function App() {
  const [cityList, setCityList] = useState([]);
  const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";

  const search = async (inputCity) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}&`
    ).json();

    const { main, name, sys, weather } = response;
    console.log(response);
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
    const GKYplanet = GKYplanetPicker(
      Math.round(main.temp),
      Math.round(main.humidity)
    );
    const newCity = (
      <CityTile
        cityName={name}
        country={sys.country}
        temp={main.temp}
        humidity={main.humidity}
        currentCondition={weather[0]["description"]}
        weatherIcon={icon}
        gkyPlanetName={GKYplanet[0]}
        gkyPlanetImg={GKYplanet[1]}
        gkyPlanetQuip={GKYplanet[2]}
        key={name + sys.country}
      />
    );

    console.log("hi");
    setCityList([...cityList, newCity]);
  };

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <section className="search">
        <SearchForm search={search} />
      </section>
      <br />
        <ListOfCities cityList={cityList} />
    </div>
  );
}

export default App;
