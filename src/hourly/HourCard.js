import React from "react";
import { addMeridiem, unixToHHMM } from "../utils/formatTime";
const HourCard = ({ hourWeather, index }) => {
  let {
    dt,
    clouds,
    temp,
    pop,
    wind_speed,
    weather,
    feels_like,
    uvi,
    visibility,
  } = hourWeather;
  const { icon, main, description } = weather[0];
  const time = unixToHHMM(dt) + addMeridiem(dt);

  return (
    <div className="border p-3 mt-3 bg-light">
      <div className="d-flex justify-content-between align-items-center p-2 ">
        <div className="d-flex align-items-center">
          <p className="me-4">{time}</p>
          <div className="d-flex align-items-center me-5">
            <h6 className="mt-1">{temp}</h6>
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
              <p>Cloud Cover</p>
              <p>{clouds} %</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Wind Speed</p>
              <p>{wind_speed} MPH</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex justify-content-between border-bottom me-3 pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Feels like</p>
              <p>{feels_like}</p>
            </div>
            <div
              className="ms-3 d-flex justify-content-between border-bottom pt-2 pb-2"
              style={{ width: "50%" }}
            >
              <p>Visibility</p>
              <p>{visibility} Meters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourCard;
