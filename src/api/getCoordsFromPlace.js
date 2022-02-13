export async function getCoordsFromPlace(city) {
  const KEY = process.env.REACT_APP_OPEN_API_KEY;
  const limit = 5;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${KEY}`
  );
  const responseFromApi = await response.json();
  console.log("responseFromApi", responseFromApi);
  const { lat, lon } = await responseFromApi[0];
  return { lat, lon };
}
