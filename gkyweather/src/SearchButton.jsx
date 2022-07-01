import GKYplanetPicker from "./Functions/GKYplanetPicker";
import ListOfCitys from "./ListOfCitys";
import CityTile from "./CityTile";

const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";
let inputCity = "Savannah";

export default function SearchButton() {
  //verifying that the query isn't already in the list of city
  //retrieve valid city's data.
  //use data to determine geeky Planet to associate with givin city
  //add retrieved city to listOfCitys.
  //reset form
  //else
  //alert user that its not a valid city

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}&`
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
      const GKYplanet = GKYplanetPicker(
        Math.round(main.temp),
        Math.round(main.humidity)
      );
      ListOfCitys.push(
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
      />);
  
    })

    .catch(() => {
      window.alert("Please search for a valid city 😩");
    });

  return <button className="search-button">Search</button>;
}
