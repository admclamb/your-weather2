import React from "react";
import { Link } from "react-router-dom";
import { getDay, getDayOfWeek } from "../utils/formatTime";

const DailyWeather = ({ day, index }) => {
  const { dt, pop, temp, weather } = day;
  const { max, min } = temp;
  const { icon, main } = weather[0];

  const theDay = getDayOfWeek(dt) + " " + getDay(dt);
  return (
    <Link
      to={`/daily/${index}`}
      className={"d-flex flex-column align-items-center"}
      id={"daily-weather-" + index}
    >
      <p className="mb-1">{theDay}</p>
      <h4 className="mb-0">{max.toFixed(0)}</h4>
      <h6>{min.toFixed(0)}</h6>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={main}
        width="100%"
      />
      <p className="text-muted">
        <i className="fas fa-tint me-1"></i>
        {(pop * 100).toFixed(0)}%
      </p>
    </Link>
  );
};

export default DailyWeather;
