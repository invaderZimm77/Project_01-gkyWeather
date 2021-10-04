
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
        console.log("fuck");
        return res.json();
    })
    
    .then((resJSON) => {
        console.log(resJSON);
    })
    
    .catch((error) => {
        console.log(`**ERROR**: ${error}`);
    }); 
});