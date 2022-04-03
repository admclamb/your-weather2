export async function getMap() {
  try {
    const KEY = process.env.REACT_APP_OPEN_API_KEY;
    const layer = "precipitation_new";
    const response = await fetch(
      `https://tile.openweathermap.org/map/${layer}/${15}/${5}/${5}.png?appid=${KEY}`
    );
    const mapFromAPI = await response.json();
    return { status: 200, ...mapFromAPI };
  } catch (error) {
    return error;
  }
}
