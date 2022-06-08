// receives input city

const CityTile = (props) => {
  return (
    <div>
      <h2 className="city-name">
        <span>{CityTile.cityName}</span>
        <sup>{CityTile.country}</sup>
      </h2>

      <div className="city-temp">
        {Math.round(CityTile.temp ?? 0)}
        <sup>°F</sup>
      </div>

      <figure>
        <div className="imgRow">
          {/* <img className="city-icon" src= ${props.CityTile.weatherIcon} alt= ${weather[0]["main"]}>
              <img className="city-GKYplanet" src=${props.CityTile.gkyPlanet} alt= ""> */}
        </div>
        <figcaption>
          {/* ${weather[0]["description"]}\nThe weather is like that of ${GKYplanet[0]}. ${GKYplanet[2]} */}
        </figcaption>
      </figure>
    </div>
  );
};
export default CityTile;
