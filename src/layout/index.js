import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Daily from "../daily/Daily";
import Home from "../home/Home";
import Settings from "../settings/Settigs";
import HourlyPage from "../hourly/HourlyPage";
import NoWeather from "../NoWeather";

const Layout = ({
  weather,
  setCoords,
  location,
  news,
  unitOfMeasure,
  setUnitOfMeasure,
  airPollution,
  coords,
}) => {
  return (
    <>
      <Header weather={weather} setCoords={setCoords} location={location} />
      <Routes>
        <Route
          path="/daily"
          element={<Daily weather={weather} location={location} news={news} />}
        />
        <Route
          path="/hourly"
          element={
            <HourlyPage weather={weather} location={location} news={news} />
          }
        />
        <Route
          path="/"
          element={
            <Home
              weather={weather}
              news={news}
              location={location}
              airPollution={airPollution}
              coords={coords}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              weather={weather}
              unitOfMeasure={unitOfMeasure}
              setUnitOfMeasure={setUnitOfMeasure}
            />
          }
        />
      </Routes>
      <Footer location={location} />
    </>
  );
};

export default Layout;
