import React from "react";
import { objHasProperties } from "../utils/objHasProperties";

const AirQuality = ({ airPollution }) => {
  if (!objHasProperties(airPollution)) return null;
  const { main, components } = airPollution.list[0];
  const { co, no2, o3, so2 } = components;
  const { aqi } = main;
  // Color based on quality level
  const qualities = {
    1: { description: "Good", color: "text-success" },
    2: { description: "Fair", color: "text-info" },
    3: { description: "Poor", color: "text-warning" },
    4: { description: "Very Poor", color: "text-danger" },
  };

  const quality = qualities[aqi];

  return (
    <div className="p-3 border bg-light mt-3">
      <h5>Air Quality</h5>
      <p className={quality.color + " p-4 text-center display-6"}>
        {quality.description}
      </p>
      <div className="row">
        <div className="col-6">
          <div className="d-flex justify-content-between border-bottom pb-2">
            <h6>CO</h6> <p>{co}</p>
          </div>
          <div className="d-flex justify-content-between pt-2">
            <h6>NO2</h6> <p>{no2}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-between border-bottom pb-2">
            <h6>O3</h6> <p>{o3}</p>
          </div>
          <div className="d-flex justify-content-between pt-2">
            <h6>SO2</h6> <p>{so2}</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="btn-for-dropdown d-flex">
          <button
            className="btn d-inline ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseDetails"
            aria-expanded="false"
            aria-controls="collapseDetails"
          >
            <i className="fas fa-chevron-down rotateOriginal"></i>
          </button>
        </div>

        <div className="collapse" id="collapseDetails">
          <div className="">
            Besides basic Air Quality Index, the API returns data about
            polluting gases, such as Carbon monoxide (CO), Nitrogen monoxide
            (NO), Nitrogen dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2),
            Ammonia (NH3), and particulates (PM2.5 and PM10).
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
