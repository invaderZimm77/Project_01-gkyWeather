import CityTile from "./CityTile";
import React from "react";

//set state of ListOfCitys, adding the new
const ListOfCitys = ({ cityList }) => {
  return <section className="list-of-cities">{cityList}</section>;
};

export default ListOfCitys;
