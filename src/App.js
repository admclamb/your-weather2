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
  const [location, setLocation] = useState({});
  const [airPollution, setAirPollution] = useState({});
  const [coords, setCoords] = useState({});
  const [news, setNews] = useState({});
  const [unitOfMeasure, setUnitOfMeasure] = useState("imperial");

  useEffect(() => {
    setWeather({});
    const abortController = new AbortController();
    getWeather(coords, unitOfMeasure)
      .then((response) => setWeather(response))
      .catch((error) => console.log(error));

    getLocation(coords)
      .then((response) => setLocation(response))
      .catch((error) => console.log(error));

    getAirPollution(coords)
      .then((response) => setAirPollution(response))
      .catch((error) => console.log(error));
    return () => {
      abortController.abort();
    };
  }, [coords, unitOfMeasure]);

  useEffect(() => {
    const abortController = new AbortController();
    // Get weather on page load if user allows geolocation
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
    // Get news on page load
    const getNewsData = async () => {
      try {
        const newsFromAPI = await getNews();
        setNews(newsFromAPI);
      } catch (error) {
        console.log(error);
      }
    };
    getNewsData();

    getCoordinates();
    return () => {
      abortController.abort();
    };
  }, []);
  console.log(news);
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
        />
      )) || <NoWeather />}
    </div>
  );
}

export default App;
