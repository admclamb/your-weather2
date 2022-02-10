import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import DayCard from "./DayCard";
import Current from "../current/Current";

const Daily = ({ weather, location }) => {
  if (!objHasProperties(weather)) return null;
  const { daily } = weather;
  const dailyArr = daily.map((day, index) => {
    return (
      <div key={index} className="border p-3 mt-3 bg-light">
        <DayCard day={day} index={index} />
      </div>
    );
  });
  return (
    <div className="container">
      <Current weather={weather} location={location} />
      <div className="row mb-3">
        <div className="col col-12 col-md-8">{dailyArr}</div>
        <div className="col col-12 col-md-4 border mt-3">
          <script
            src="https://s3-us-west-2.amazonaws.com/kaboodle/kaboodle.js"
            type="text/javascript"
          ></script>
        </div>
      </div>
    </div>
  );
};

export default Daily;
