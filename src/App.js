import React, { useEffect, useState } from "react";
import NoWeather from "./NoWeather";
import { getWeather } from "./api/getWeather";
import "./App.css";
import { getCurrentPosition } from "./api/getCurrentPosition";
import { objHasProperties } from "./utils/objHasProperties";
import Layout from "./layout";
import { getLocation } from "./api/getLocation";
import { getNews } from "./api/getNews";
import { getAirPollution } from "./api/getAirPollution";
function App() {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({});
  const [airPollution, setAirPollution] = useState({});
  const [coords, setCoords] = useState({});
  const [news, setNews] = useState({});
  const [unitOfMeasure, setUnitOfMeasure] = useState("imperial");

  useEffect(() => {
    setWeather({});
    setError(null);
    const abortController = new AbortController();
    getWeather(coords, unitOfMeasure)
      .then((response) => setWeather(response))
      .catch(setError);

    getLocation(coords)
      .then((response) => setLocation(response))
      .catch(setError);

    getAirPollution(coords)
      .then((response) => setAirPollution(response))
      .catch(setError);
    return () => {
      abortController.abort();
    };
  }, [coords, unitOfMeasure]);
  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    // Get weather on page load if user allows geolocation
    const getCoordinates = async () => {
      try {
        const { coords } = await getCurrentPosition();
        const lat = coords.latitude;
        const lon = coords.longitude;
        setCoords({ lat, lon });
      } catch (error) {
        setError(error);
      }
    };
    // Get news on page load
    const getNewsData = () => {
      getNews().then(setNews).catch(setError);
    };
    getNewsData();

    getCoordinates();
    return () => {
      abortController.abort();
    };
  }, []);
  console.log(error ? error.message : "No error");
  return (
    <div className="App">
      {(objHasProperties(weather) && (
        <Layout
          weather={weather}
          setCoords={setCoords}
          location={location}
          news={news}
          unitOfMeasure={unitOfMeasure}
          setUnitOfMeasure={setUnitOfMeasure}
          airPollution={airPollution}
          coords={coords}
          error={error}
        />
      )) || <NoWeather setCoords={setCoords} news={news} />}
    </div>
  );
}

export default App;
