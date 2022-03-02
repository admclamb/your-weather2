import React from "react";
import { Link } from "react-router-dom";
import "./PageNavigation.css";
const PageNavigation = () => {
  return (
    <div className="container">
      <nav className="d-flex pt-3 main-nav">
        <Link to="/" className="me-3 p-1 page-nav">
          <h5>Home</h5>
        </Link>
        <Link to="/hourly" className="me-3 p-1 page-nav">
          <h5>Hourly</h5>
        </Link>

        <Link to="/daily" className="me-3 p-1 page-nav">
          <h5>8 Days</h5>
        </Link>
      </nav>
    </div>
  );
};

export default PageNavigation;
