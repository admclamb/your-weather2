import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
// import objHasProperties from "../utils/objHasProperties";
import "./BreadCrumbFooter.css";
const BreadCrumbFooter = ({ location }) => {
  if (!objHasProperties(location)) {
    return (
      <nav aria-label="breadcrumb" className="breadcrumb-footer p-4 text-dark">
        {" "}
      </nav>
    );
  }
  const { country, state, name } = location;
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
