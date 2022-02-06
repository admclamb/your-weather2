import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import Spinner from "../utils/Spinner";
import DailyWeather from "./DailyWeather";
import "./Forecast.css";
const Forecast = ({ weather }) => {
  if (!objHasProperties(weather)) return <Spinner />;
  const weatherPerDay = weather.daily.map((day, index) => {
    if (index < 5) {
      return <DailyWeather day={day} index={index} key={index} />;
    }
    return;
  });

  return (
    <div className="border p-3 bg-light">
      <h5 className="mb-3">Daily Weather</h5>
      <div className="d-flex justify-content-between weather-per-day">
        {weatherPerDay}
      </div>
    </div>
  );
};

export default Forecast;
