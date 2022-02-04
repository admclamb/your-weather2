export async function getLocation({ lat, lon }) {
  const KEY = process.env.REACT_APP_OPEN_API_KEY;
  const limit = 5;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${KEY}`
  );
  const locationFromAPI = await response.json();
  return locationFromAPI;
}
