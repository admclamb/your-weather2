import React, { useEffect, useState } from "react";
import NoWeather from "./NoWeather";
import { getWeather } from "./api/getWeather";
import "./App.css";
import { getCurrentPosition } from "./api/getCurrentPosition";
import { objHasProperties } from "./utils/objHasProperties";
import Layout from "./layout";
import { getLocation } from "./api/getLocation";
function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [coords, setCoords] = useState({});
  useEffect(() => {
    setWeather({});
    const abortController = new AbortController();
    getWeather(coords)
      .then((response) => setWeather(response))
      .catch((error) => console.log(error));

    getLocation(coords)
      .then((response) => setLocation(response))
      .catch((error) => console.log(error));
    return () => {
      abortController.abort();
    };
  }, [coords]);
  console.log(location);
  // Get weather on page load if user allows geolocation
  useEffect(() => {
    const abortController = new AbortController();
    const getCoordinates = async () => {
      try {
        const { coords } = await getCurrentPosition();
        const lat = coords.latitude;
        const lon = coords.longitude;
        setCoords({ lat, lon });
      } catch (error) {
        console.log(error);
      }
    };
    getCoordinates();
    return () => {
      abortController.abort();
    };
  }, []);
  console.log(weather);

  return (
    <div className="App">
      {(objHasProperties(weather) && (
        <Layout weather={weather} setCoords={setCoords} location={location} />
      )) || <NoWeather />}
    </div>
  );
}

export default App;
