export async function getCoordsFromPlace(city) {
  const KEY = process.env.REACT_APP_OPEN_KEY;
  const limit = 5;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=${limit}&appid=${KEY}`
  );
  const responseFromApi = await response.json()[0];
  console.log(responseFromApi);
  const { lat, lon } = responseFromApi[0];
  return { lat, lon };
}
