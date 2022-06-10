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
        <section className="img-Row">
          <img
            className="city-weather-icon"
            src={props.weatherIcon}
            alt="Icon Not Found"
          />
          <img
            className="gky-planet-img"
            src={props.gkyPlanetImg}
            alt="Planet Not Found"
          />
        </section>
        <figcaption>
          {props.currentCondition}
          {"\n"} The weather is like that of the planet {props.gkyPlanetName}.{" "}
          {props.gkyPlanetQuip}
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
  weatherIcon: "https://openweathermap.org/img/wn/04d@2x.png",
  gkyPlanetName: "planet planet face",
  gkyPlanetImg:
    "https://media.istockphoto.com/vectors/not-found-page-404-error-file-not-found-vector-id1139665574",
  gkyPlanetQuip: "im a quip. puip puip psjfg djlghudi jfghfufhfsddfsdui",
};
export default CityTile;
