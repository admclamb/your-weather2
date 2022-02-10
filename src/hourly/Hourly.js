import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import Spinner from "../utils/Spinner";
import HourlyDisplay from "./HourDisplay";

const Hourly = ({ weather }) => {
  if (!objHasProperties(weather)) return <Spinner />;

  const hourlyArr = weather.hourly.map((hour, index) => {
    return index < 6 && <HourlyDisplay hour={hour} index={index} />;
  });

  return (
    <div className="container bg-light p-3 mt-3">
      <div className="d-flex align-items-center">
        <h5 className="mb-3">Hourly Weather</h5>
      </div>
      <div className="d-flex justify-content-between">{hourlyArr}</div>
    </div>
  );
};

export default Hourly;
