import CityTile from "./CityTile"
import React from 'react'


//set state of ListOfCitys, adding the new
const ListOfCitys = () => {
  return (
    <section className="list-of-cities">
      <CityTile />
      <CityTile cityName="Popo" country="JP" />
      <CityTile cityName="Totot" />
    </section>
  );
};

export default ListOfCitys
