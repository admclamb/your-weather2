import React from "react";
import { getDayOfWeek, unixToHHMM } from "../utils/formatTime";
const DayCard = ({ dayWeather, index }) => {
  let {
    dt,
    temp: { min, max },
    pop,
    wind_speed,
    wind_gust,
    weather,
    uvi,
    sunrise,
    sunset,
  } = dayWeather;
  const { icon, main, description } = weather[0];
  const day = getDayOfWeek(dt);
  sunrise = unixToHHMM(sunrise);
  sunset = unixToHHMM(sunset);
  return (
    <div className="border p-3 mt-3 bg-light">
      <div className="d-flex justify-content-between align-items-center p-2 ">
        <div className="d-flex align-items-center">
          <p className="me-4">{day}</p>
          <div className="d-flex align-items-center me-5">
            <h6 className="mt-1">{max}</h6>
            <p className="text-muted">/ {min}</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={main}
          />
          <p className="ms-5">{description}</p>
        </div>
        <div className="d-flex align-items-center">
          <div className="percipitation text-muted d-flex align-items-center me-3">
            <i className="fas fa-tint me-2"></i>
            <p>{pop}%</p>
          </div>
          <div className="wind text-muted">
            <i className="fas fa-wind me-2"></i>
            {wind_speed} MPH
          </div>
          <button
            className="btn d-inline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapseDetails" + index}
            aria-expanded="false"
            aria-controls="collapseDetails"
          >
            <i className="fas fa-chevron-down rotateOriginal"></i>
          </button>
        </div>
      </div>

      <div
        className={index === 0 ? "collapse.show" : "collapse"}
        id={"collapseDetails" + index}
      >
        <div className="">
          <p>{description}</p>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>UV Index</p>
              <p>{uvi}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Percipitation</p>
              <p>{pop} %</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Sunrise</p>
              <p>{sunrise}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Wind Speed</p>
              <p>{wind_speed}</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Sunset</p>
              <p>{sunset}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Wind Gust</p>
              <p>{wind_gust}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
