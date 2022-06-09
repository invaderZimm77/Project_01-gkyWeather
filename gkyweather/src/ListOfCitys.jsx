import CityTile from "./CityTile"

import React from 'react'

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
