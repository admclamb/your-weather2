import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
// import objHasProperties from "../utils/objHasProperties";
import "./BreadCrumbFooter.css";
const BreadCrumbFooter = ({ weather }) => {
  if (!objHasProperties(weather)) return "Your Weather";
  const { country, state, name } = weather.locationInfo[0];
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-footer p-3 text-dark">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">{country}</li>
          <li className="breadcrumb-item" aria-current="page">
            {state}
          </li>
          <li className="breadcrumb-item" aria-current="page">
            {name}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrumbFooter;
