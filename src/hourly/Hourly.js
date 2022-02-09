import React from "react";

const Hourly = ({ weather, location }) => {
  console.log(weather);
  console.log(location);

  return (
    <div className="container bg-light p-3">
      <div className="d-flex align-items-center">
        <h4 className="me-1">Hourly Weather</h4>
        <h6 className="mt-1">{location[0] ? `- ${location[0].name}` : ""}</h6>
      </div>
    </div>
  );
};

export default Hourly;
