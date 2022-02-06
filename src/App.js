import React, { useEffect, useState } from "react";
import NoWeather from "./NoWeather";
import { getWeather } from "./api/getWeather";
import "./App.css";
import { getCurrentPosition } from "./api/getCurrentPosition";
import { objHasProperties } from "./utils/objHasProperties";
import Layout from "./layout";
import { getLocation } from "./api/getLocation";
import { getNews } from "./api/getNews";
function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
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
    return () => {
      abortController.abort();
    };
  }, [coords]);

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
  return (
    <div className="App">
      {(objHasProperties(weather) && location.length > 0 && (
        <Layout
          weather={weather}
          setCoords={setCoords}
          location={location}
          news={news}
          setUnitOfMeasure={setUnitOfMeasure}
        />
      )) || <NoWeather />}
    </div>
  );
}

export default App;
