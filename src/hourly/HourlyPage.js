import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import HourCard from "./HourCard";
import Current from "../current/Current";
import NewsWidgetSM from "../news/NewsWidgetSM";

const HourlyPage = ({ weather, location, news }) => {
  if (!objHasProperties(weather)) return null;
  const { hourly } = weather;
  console.log(hourly);
  const hourlyArr = hourly.map((hour, index) => {
    return <HourCard hourWeather={hour} index={index} key={index} />;
  });
  return (
    <div className="container">
      <Current weather={weather} location={location} />
      <div className="row mb-3">
        <div className="col col-12 col-md-8">{hourlyArr}</div>
        <div className="col col-12 col-md-4">
          <NewsWidgetSM index={6} news={news} />
          <NewsWidgetSM index={7} news={news} />
          <NewsWidgetSM index={8} news={news} />
        </div>
      </div>
    </div>
  );
};

export default HourlyPage;
