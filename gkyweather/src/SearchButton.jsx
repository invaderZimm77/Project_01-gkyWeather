
      /* Input verification
	  	if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter((el) => {
      let content = "";
      if (inputCity.includes(",")) {
        if (inputCity.split(",")[1].length > 2) {
          inputCity = inputCity.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputCity.toLowerCase();
    });

    if (filteredArray.length > 0) {
      alert(`You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
        }...otherwise please be more specific by providing the country code as well 😉`);
        boxReset();
      return;
    }
  }

	  */

export default function SearchButton() {
  return (
    <button className="search-button">Search</button>
  )
}
