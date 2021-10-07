# Project_01-gkyWeather


App Title: Geeky Weather

App Description:Takes input ang gives visual feed back of the requested city's current weather and a geeky planet that has similar weather and gives a quip

API: https://openweathermap.org/api
    varies weather values 

API Snippet:{
    "coord": {
        "lon": -77.3997,
        "lat": 39.4668
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 73.78,
        "feels_like": 74.52,
        "temp_min": 70.88,
        "temp_max": 77.29,
        "pressure": 1024,
        "humidity": 78
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.01,
        "deg": 232,
        "gust": 1.99
    },
    "clouds": {
        "all": 90
    },
    "dt": 1633635811,
    "sys": {
        "type": 2,
        "id": 2038516,
        "country": "US",
        "sunrise": 1633605095,
        "sunset": 1633646569
    },
    "timezone": -14400,
    "id": 4355594,
    "name": "Frederick",
    "cod": 200
}

Wireframes: https://whimsical.com/starwars-app-YEdHW1cMkBckeT8WUzmotn@2Ux7TurymN8kYUSbEJLp


MVP: takes user input 
    returns current weather based on input
    returns a geeky planet reference based on the current temp
    able to have multipule cities

Post-MVP: instead return a geeky planet based on current temp and humidity.
        give a quip about the weather
        based on crosscompare from starwars api
        quip based on current weather condition

Goals:
        MVP  10/6 was really only deadline i gave myself

Timeframes: all time Estimaited -- 20% planning/research 60%coding 20%polishing/refining/debuggingCSS.
    psuedocode/wireframe -- 3hours
    HTML -- 1hour
    js -- 6hours
    css -- 4hours
    coding to mvp -- 9hours
    beyondMVP -- 2hours
    debug/head-scratching time -- 2hours

source: used in the premise of a template
https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893
