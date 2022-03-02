import React from "react";
import { Link } from "react-router-dom";
import { unixToHHMM, addMeridiem } from "../utils/formatTime";
import { objHasProperties } from "../utils/objHasProperties";
import Spinner from "../utils/Spinner";

const Current = ({ weather, location }) => {
  if (!objHasProperties(weather)) return <Spinner />;
  const { humidity, wind_speed, dt, temp, feels_like } = weather.current;
  const { main, icon } = weather.current.weather[0];
  const time = unixToHHMM(dt) + addMeridiem(dt);
  const header = location[0]
    ? `Today's weather in ${location[0].name}`
    : "Today's weather";
  return (
    <div className="border text-dark ps-4 pt-4 pe-4 pb-2 mt-3 bg-light">
      <h6>{header}</h6>
      <div className="d-flex justify-content-between">
        <div style={{ width: "50%" }}>
          <div>
            <p className="text-muted">{time}</p>
          </div>
          <div className="d-flex align-items-center ms-auto me-auto">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={main}
            />
            <h3 className="display-3">{temp.toFixed(0)}&#176;</h3>
          </div>
          <h6>{main}</h6>
          <p>
            <span></span>
          </p>
        </div>
        <div
          style={{ width: "50%" }}
          className="mt-auto mb-auto mt-4 d-none d-md-block"
        >
          <div className="d-flex justify-content-between border-bottom pb-2">
            <h6>Feels Like</h6>
            <p>{feels_like}</p>
          </div>
          <div className="d-flex justify-content-between border-bottom pb-2 pt-2">
            <h6>Humidity</h6>
            <p>{humidity}%</p>
          </div>
          <div className="d-flex justify-content-between pt-2">
            <h6>Wind</h6>
            <p>{wind_speed} MPH</p>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <Link to="/" className="ms-auto">
          More info &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Current;
