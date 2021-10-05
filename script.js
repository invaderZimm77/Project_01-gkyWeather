
//https://swapi.dev/
// source: used in the premise of a template
// https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893

//get and store user's location
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const form = document.querySelector(".top-banner form");
const list = document.querySelector(".ajax-section .city-list");
const button = document.querySelector("#search");

button.addEventListener("click", () => {        // i make the button clicky
    const inputCity = document.getElementById("boxie").value;
    console.log(inputCity);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}&`)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        const { main, name, sys, weather } = data;
        // const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
              <span>${name}</span>
              <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°F</sup></div>

        `;
        li.innerHTML = markup;
        list.appendChild(li);
    
        console.log(resJSON);
        dispCityWeather(resJSON);
    })
    .catch((error) => {
        msg.textContent(`Invalid.\nPlease search for a valid city 😩`);
    });
});

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

/* <figure>
<img class="city-icon" src= {icon} alt= {weather[0]["main"]}>
<figcaption>${weather[0]["description"]}</figcaption>
</figure> */






//   // takes the element just made and adds it to the bottom of the page.
//   const mainCityDiv = document.createElement("div");
//   mainCityDiv.className = "main-city-div";
//   document.querySelector(".city-list").appendChild(mainCityDiv);


//   <figure>
//   <img class="city-icon" src= {icon} alt= {weather[0]["main"]}>
//   <figcaption>${weather[0]["description"]}</figcaption>
// </figure>
