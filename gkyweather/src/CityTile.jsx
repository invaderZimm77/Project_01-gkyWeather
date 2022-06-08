// receives input city
import "./CityTile.css";

const CityTile = (props) => {
  return (
    <div className="city-tile">
      <h2 className="city-name">
        <span>{props.cityName}</span>
        <sup>{props.country}</sup>
      </h2>

      <div className="city-temp">
        {Math.round(props.temp ?? 0)}
        <sup>°F</sup>
      </div>

      <figure>
        <div className="imgRow">
          <img
            className="city-icon"
            src={props.weatherIcon}
            alt="Icon Not Found"
          />
          <img
            className="city-GKYplanet"
            src={props.gkyPlanetImg}
            alt="Planet Not Found"
          />
        </div>
        <figcaption>
          {props.currentCondition}{"\n"} The weather is like that of the planet {" "}
          {props.gkyPlanetName}. {props.gkyPlanetQuip}
        </figcaption>
      </figure>
    </div>
  );
};

CityTile.defaultProps = {
  _id: null,
  cityName: "Im a city",
  country: "US",
  temp: null,
  currentCondition: "ᚢᚣᚤᚥ ᚨᚩᚪᚫᚬᚭᚮᚯ",
  weatherIcon: "Weather ICON",
  gkyPlanetName: "planet planet face",
  gkyPlanetImg: "mmmmmmmm Planetie",
  gkyPlanetQuip: "im a quip. puip puip psjfg djlghudi jfghfufhfsddfsdui",
};
export default CityTile;
