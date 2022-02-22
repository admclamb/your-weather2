import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import DayCard from "./DayCard";
import Current from "../current/Current";
import NewsWidgetSM from "../news/NewsWidgetSM";

const Daily = ({ weather, location, news }) => {
  if (!objHasProperties(weather)) return null;
  const { daily } = weather;
  const dailyArr = daily.map((day, index) => {
    return <DayCard dayWeather={day} index={index} key={index} />;
  });
  return (
    <div className="container">
      <Current weather={weather} location={location} />
      <div className="row mb-3">
        <div className="col col-12 col-md-8">{dailyArr}</div>
        {news && (
          <div className="col col-12 col-md-4">
            <NewsWidgetSM index={6} news={news} />
            <NewsWidgetSM index={7} news={news} />
            <NewsWidgetSM index={8} news={news} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Daily;
