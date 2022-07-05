import React from "react";
// import { useState, useEffect } from "react";
import CityTile from "./CityTile";

const CityTiles = (props) => {
  <CityTile
    cityName={CityTile.cityName}
    country={CityTile.country}
    temp={CityTile.temp}
    humidity={CityTile.humidity}
    currentCondition={CityTile.currentCondition}
    weatherIcon={CityTile.weatherIcon}
    gkyPlanetName={CityTile.gkyPlanetName}
    gkyPlanetImg={CityTile.gkyPlanetImg}
    gkyPlanetQuip={CityTile.gkyPlanetQuip}
  />;

  return <div className="city-tiles">CityTiles</div>;
};

export default CityTiles;
/*


set
cityName= name
country= sys.country
temp= main.temp
humidity= main.humidity
currentCondition= weather[0]["description"]
weatherIcon= icon
*/