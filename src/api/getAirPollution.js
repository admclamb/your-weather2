export async function getAirPollution(coords) {
  if (Object.keys(coords).length > 0 && coords.lat && coords.lon) {
    const { lat, lon } = coords;
    const KEY = process.env.REACT_APP_OPEN_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${KEY}`
    );
    const pollutionFromAPI = await response.json();
    return { status: 200, ...pollutionFromAPI };
  }
  return {};
}
