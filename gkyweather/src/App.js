import "./App.css";
import SearchForm from "./Components/SearchForm.jsx";
import ListOfCitys from "./Components/ListOfCitys";
import React, { useState } from "react";
import CityTile from "./Components/CityTile";
import GKYplanetPicker from "./Functions/GKYplanetPicker";

function App() {
  const [cityList, setCityList] = useState();
  const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";

  const RunSearch = (setCityList, inputCity) => {
    let newCity;
    console.log("hi");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}&`
    )
      .then((res) => {
        alert(res);
        console.log(res);
        return res.json();
      })
      .then((data) => {
        const { main, name, sys, weather } = data;
        console.log(data);
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const GKYplanet = GKYplanetPicker(
          Math.round(main.temp),
          Math.round(main.humidity)
        );
        newCity = (
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
      })
      .catch(() => {
        window.alert("Please search for a valid city 😩");
      });
    setCityList([...cityList, newCity]);
  };

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <section className="search">
        <SearchForm />
      </section>
      <br />
      <ListOfCitys cityList={cityList} />
    </div>
  );
}

export default App;
