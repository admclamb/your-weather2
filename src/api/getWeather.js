export const getWeather = async (coords) => {
  if (Object.keys(coords).length > 0) {
    const { lat, lon } = coords;
    const KEY = process.env.REACT_APP_OPEN_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY}`
    );
    const weatherFromAPI = await response.json();
    return { status: 200, ...weatherFromAPI };
  }
};
