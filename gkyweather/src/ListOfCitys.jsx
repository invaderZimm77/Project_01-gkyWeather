import CityTile from "./CityTile"

import React from 'react'

const ListOfCitys = () => {
  return (
    <div>
      <CityTile />
      <CityTile cityName="Popo" country="JP" />
      <CityTile cityName="Totot" />
    </div>
  );
};

export default ListOfCitys
