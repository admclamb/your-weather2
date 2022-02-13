export const getWeather = async (coords, unitOfMeasure) => {
  if (Object.keys(coords).length > 0 && coords.lat && coords.lon) {
    const { lat, lon } = coords;
    const KEY = process.env.REACT_APP_OPEN_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unitOfMeasure}&appid=${KEY}`
    );
    const weatherFromAPI = await response.json();
    return { status: 200, ...weatherFromAPI };
  }
};
