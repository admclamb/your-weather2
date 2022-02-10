import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import Spinner from "../utils/Spinner";
import HourlyDisplay from "./HourDisplay";

const WeatherList = ({ weather, location }) => {
  if (!objHasProperties(weather)) return <Spinner />;

  const hourlyArr = weather.hourly.map((hour, index) => {
    return index < 6 && <HourlyDisplay hour={hour} />;
  });

  return (
    <div className="container bg-light p-3">
      <div className="d-flex align-items-center">
        <h4 className="me-1">Hourly Weather</h4>
        <h6 className="mt-1">{location[0] ? `- ${location[0].name}` : ""}</h6>
      </div>
      <div className="d-flex justify-content-between">{hourlyArr}</div>
    </div>
  );
};

export default WeatherList;
