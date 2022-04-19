export async function getAirPollution(coords) {
  try {
    if (Object.keys(coords).length > 0 && coords.lat && coords.lon) {
      const { lat, lon } = coords;
      const KEY = process.env.REACT_APP_OPEN_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${KEY}`
      );
      return await response.json();
    }
  } catch (error) {
    return error;
  }
}
