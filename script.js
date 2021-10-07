// source: used in the premise of a template
// https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
//Terra Claycamp

const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const form = document.querySelector(".top-banner form");
const list = document.querySelector(".ajax-section .city-list");
const button = document.querySelector("#search");
//let formCl = document.getElementById("boxie");

const boxReset = () =>{
    document.getElementById("boxie").value = "";
    document.getElementById("boxie").focus();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
button.addEventListener("click", () => {// i make the button clicky
  const inputCity = document.getElementById("boxie").value;
  console.log(inputCity);

  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter((el) => {
      let content = "";
      if (inputCity.includes(",")) {
        if (inputCity.split(",")[1].length > 2) {
          inputCity = inputCity.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputCity.toLowerCase();
    });

    if (filteredArray.length > 0) {
      alert(`You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
        }...otherwise please be more specific by providing the country code as well 😉`);
        boxReset();
      return;
    }
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}&`
  )
    .then((res) => {
      //   console.log(res);
      return res.json();
    })
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
      const GKYplanet = GKYplanetPicker(
        Math.round(main.temp),
        Math.round(main.humidity)
        );

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
            <h2 class="city-name" data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°F</sup></div>
        <figure>
            <div class="imgRow">
                <img class="city-icon" src= ${icon} alt= ${weather[0]["main"]}>
                <img class="cityGKYplanet" src=${GKYplanet[1]} alt= "">
            </div>
            <figcaption>${weather[0]["description"]
            }\nThe temperature is like that of ${GKYplanet[0]}. ${GKYplanet[2]}</figcaption>
            
        </figure>

        `;
      li.innerHTML = markup;
      list.appendChild(li);
      boxReset();
    })

    .catch(() => {
        window.alert("Please search for a valid city 😩");
    });
}); //END OF CLICKY BUTTON
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const GKYplanetPicker = (cityTemp, cityHumidity) => {
  console.log(cityTemp, cityHumidity);
  const desertThresh = 45;
  let newPlanet = [];

  if (cityTemp >= 100) {
    newPlanet = [
      "Mustafar",
      "https://static.wikia.nocookie.net/starwars/images/a/af/Mustafar_DB.png", "Stay hydrated!! Its really hot out there."
    ];
    return newPlanet;
  } else if (cityTemp < 100 && cityTemp >= 80) {
    if (cityHumidity < desertThresh) {
      newPlanet = [
        "Tatooine",
        "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png", "Probably need some sunscreen"
      ];
    } else {
      newPlanet = [
        "Scarif",
        "https://static.wikia.nocookie.net/starwars/images/6/6d/Scarif_SWCT.png", "Enjoying the warm humidity?"
      ];
    }
    return newPlanet;
  } else if (cityTemp < 80 && cityTemp >= 72) {
    if (cityHumidity > desertThresh) {
      newPlanet = [
        "Yavin IV",
        "https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png","Should be nice out... Enjoy!"
      ];
    } else {
      newPlanet = [
        "Jakku",
        "https://static.wikia.nocookie.net/starwars/images/f/ff/Jakku-PoeDameronFlightLog.png", "Enjoy the desert esq weather."
      ];
    }
    return newPlanet;
  } else if (cityTemp < 72 && cityTemp >= 62) {
    newPlanet = [
      "Alderaan",
      "https://static.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg","May get explodey today. Enjoy the the weather whlile it last."
    ];
    return newPlanet;
  } else if (cityTemp < 62 && cityTemp >= 52) {
    if (cityHumidity > desertThresh) {
      newPlanet = [
        "Dagobah",
        "https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg","Great day for exploring."
      ];
    } else {
      newPlanet = [
        "Dathomir",
        "https://static.wikia.nocookie.net/starwars/images/f/f3/Dathomir-Massacre.png", "You should probaly wear a jacket."
      ];
    }
    return newPlanet;
  } else if (cityTemp < 52 && cityTemp >= 45) {
    newPlanet = [
      "Kamino",
      "https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg", "Wear the jacket.."
    ];
  } else if (cityTemp <= 45) {
    if (cityHumidity > desertThresh) {
      newPlanet = [
        "Hoth",
        "https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png", " You better bundle up. Happy Life Day!"
      ];
    } else {
      newPlanet = [
        "Jedah",
        "https://static.wikia.nocookie.net/starwars/images/2/2c/Jedha_SWCT.png"," You better bundle up."
      ];
    }
    return newPlanet;
  }

};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//CODE GRAVEYARD
//GET STAR WARS PLANETBASED ON TEMP

// newPlanet = [
//     "",
//     "",
// ];
/*
    if temp is< 75 && >52
        alderan
    if tem is
*/

// const dispCityWeather = (city2Disp) => {
//     mainCityDiv.innerHTML = "";
//     const newCityDiv = document.createElement("div");
//     newCityDiv.background

//     const newCityName = document.createElement("h3");
//     newCityName.innerText = city2Disp.name;

//     const newCityCurrentTEMP = document.createElement("h4");
//     newCityCurrentTEMP.innerText = `Currenty ${city2Disp.main.temp}°f`;

//     const newCityHumidity = document.createElement("h5");
//     newCityHumidity.innerText = `Humidity : ${city2Disp.main.humidity}%`;
//     console.log(city2Disp.weather);

//     newCityDiv.append(newCityName, newCityCurrentTEMP, newCityHumidity);
//     mainCityDiv.appendChild(newCityDiv);
// }

//   // takes the element just made and adds it to the bottom of the page.
//   const mainCityDiv = document.createElement("div");
//   mainCityDiv.className = "main-city-div";
//   document.querySelector(".city-list").appendChild(mainCityDiv);

//   <figure>
//   <img class="city-icon" src= {icon} alt= {weather[0]["main"]}>
//   <figcaption>${weather[0]["description"]}</figcaption>
// </figure>
