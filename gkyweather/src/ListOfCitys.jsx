import CityTile from "./CityTile"
import React from 'react'


//set state of ListOfCitys, adding the new
const ListOfCitys = () => {
  return (
    <section className="list-of-cities">
      <CityTile />
      <CityTile cityName="Popo" country="JP" temp="120"/>
      <CityTile cityName="Totot" />
      <CityTile cityName="London" country="UK" temp="20"/>
    </section>
  );
};

export default ListOfCitys
