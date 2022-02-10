import React from "react";
import { Link } from "react-router-dom";
import { addMeridiem, unixToHH } from "../utils/formatTime";
const HourlyDisplay = ({ hour, index, hourlyLength }) => {
  const { dt, temp, weather, pop } = hour;
  const { main, icon } = weather[0];
  const time = unixToHH(dt) + addMeridiem(dt);
  let containerClass = "d-flex flex-column align-items center text-center";
  if (index + 1 === hourlyLength) {
    containerClass =
      "d-none d-md-flex flex-column align-items center text-center";
  }
  return (
    <Link to={`/`} className={containerClass}>
      <p className="text-muted mb-1">{time}</p>
      <h4 className="mb-2">{temp}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={main}
        width="100%"
      />
      <span className="text-muted mt-3">
        <i className="fas fa-tint fa-xs me-1"></i>
        {pop}%
      </span>
    </Link>
  );
};

export default HourlyDisplay;
