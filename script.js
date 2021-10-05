
//https://swapi.dev/

//get and store user's location
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const button = document.querySelector("#search");
button.addEventListener("click", () => {        // i make the button clicky
    const inputCity = document.getElementById("boxie").value;
    console.log(inputCity);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${weatherAPIkey}&`)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((resJSON) => {
        console.log(resJSON);
        dispCityWeather(resJSON);
    })
    .catch((error) => {
        console.log(`**ERROR**: ${error}`);
    }); 
});


const dispCityWeather = (city2Disp) => {
    mainCityDiv.innerHTML = "";
    const newCityDiv = document.createElement("div");

    const newCityName = document.createElement("h3");
    newCityName.innerText = city2Disp.name;

    const newCityHumidity = document.createElement("h4");
    newCityHumidity.innerText = city2Disp.main.humidity;
    console.log(city2Disp.weather);
    
    newCityDiv.append(newCityName, newCityHumidity);
    mainCityDiv.appendChild(newCityDiv);
}

  // takes the element just made and adds it to the bottom of the page.
  const mainCityDiv = document.createElement("div");
  mainCityDiv.className = "main-city-div";
  document.querySelector(".city-list").appendChild(mainCityDiv);
  

  // {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base: "stations"
// clouds: {all: 75}
// cod: 200
// coord: {lon: -77.3997, lat: 39.4668}
// dt: 1633376684
// id: 4355594
// main:
// feels_like: 299.52
// humidity: 71
// pressure: 1013
// temp: 299.52
// temp_max: 301.93
// temp_min: 296.89
// [[Prototype]]: Object
// name: "Frederick"
// sys:
// country: "US"
// id: 2038516
// sunrise: 1633345720
// sunset: 1633387653
// type: 2
// [[Prototype]]: Object
// timezone: -14400
// visibility: 10000
// weather: Array(1)
// 0:
// description: "broken clouds"
// icon: "04d"
// id: 803
// main: "Clouds"
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Array(0)
// wind:
// deg: 260
// gust: 0.45
// speed: 0.45
// [[Prototype]]: Object
// [[Prototype]]: Object
