// receives input city
export default function CityTile() {
  return (
    <div>
      <h2 class="city-name" data-name="Pittsburgh,US">
        <span>Pittsburgh</span>
        <sup>${"US"}</sup>
      </h2>
      <div class="city-temp">
        ${Math.round(25.55556)}
        <sup>°F</sup>
      </div>
      <figure>
        <div class="imgRow">
          {/* <img class="city-icon" src= ${icon} alt= ${weather[0]["main"]}>
                <img class="cityGKYplanet" src=${GKYplanet[1]} alt= ""> */}
        </div>
        <figcaption>
          {/* ${weather[0]["description"]}\nThe weather is like that of $
          {GKYplanet[0]}. ${GKYplanet[2]} */}
        </figcaption>
      </figure>
    </div>
  );
}










// export default function CityTile() {
//   return (
//     <div>
//       <h2 class="city-name" data-name="${name},${sys.country}">
//         <span>${name}</span>
//         <sup>${sys.country}</sup>
//       </h2>
//       <div class="city-temp">
//         ${Math.round(main.temp)}
//         <sup>°F</sup>
//       </div>
//       <figure>
//         <div class="imgRow">
//           {/* <img class="city-icon" src= ${icon} alt= ${weather[0]["main"]}>
//                 <img class="cityGKYplanet" src=${GKYplanet[1]} alt= ""> */}
//         </div>
//         <figcaption>
//           ${weather[0]["description"]}\nThe weather is like that of $
//           {GKYplanet[0]}. ${GKYplanet[2]}
//         </figcaption>
//       </figure>
//     </div>
//   );
// }
