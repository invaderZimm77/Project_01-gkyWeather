import React from "react";
import { useState, useEffect } from "react";
import CityTile from "./CityTile";

const CityTiles = (props) => {
  <CityTile
    _id={CityTile._id}
    cityName={CityTile.cityName}
    country={CityTile.country}
    temp={CityTile.temp}
    currentCondition={CityTile.currentCondition}
    weatherIcon={CityTile.weatherIcon}
    gkyPlanetName={CityTile.gkyPlanetName}
    gkyPlanetImg={CityTile.gkyPlanetImg}
    gkyPlanetQuip={CityTile.gkyPlanetQuip}
  />;

  return <div className="city-tiles">CityTiles</div>;
};

export default CityTiles;

