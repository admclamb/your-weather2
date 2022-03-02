import { validateLocationSearch } from "../utils/validateLocationSearch";

export async function getCoordsFromPlace(city) {
  console.log("here");
  validateLocationSearch(city);
  try {
    const KEY = process.env.REACT_APP_OPEN_API_KEY;
    const limit = 5;
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${KEY}`
    );
    const responseFromApi = await response.json();
    const { lat, lon } = await responseFromApi[0];
    return { lat, lon };
  } catch (error) {
    return {};
  }
}
