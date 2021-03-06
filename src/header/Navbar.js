import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import "./Navbar.css";
const NavbarUpdated = ({ weather, location, setCoords }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  return (
    <nav className="bg-dark text-light">
      <div className="container p-3 d-flex justify-content-between align-items-center">
        <section className="left d-flex align-items-center">
          <div className="logo-brand me-4">
            <Link to="/" className="logo-brand text-light">
              <h1 className="navbar-logo">Weatherly</h1>
            </Link>
          </div>
          <div className="location-weather">
            {location && location[0] && (
              <p className="d-none d-sm-block">
                {location[0].name}, {location[0].state},{" "}
                {weather && weather.current.temp && weather.current.temp}
                &#176;
              </p>
            )}
          </div>
        </section>
        <section className="right">
          <div className="navbar-collapsed d-lg-none">
            <button
              className="hamburger-menu"
              onClick={() => setHamburgerActive(!hamburgerActive)}
            >
              <i className="fa-solid fa-bars fa-2x text-light"></i>
            </button>
          </div>
          <div className="navbar-uncollapsed d-none d-lg-flex align-items-center">
            <SearchForm setCoords={setCoords} />
            <Link to="/settings" className="">
              <i className="fa-solid fa-sliders text-light"></i>
            </Link>
          </div>
        </section>
      </div>
      {hamburgerActive && (
        <div className="hamburger-menu container">
          <div className="mb-2">
            <SearchForm setCoords={setCoords} />
          </div>

          <Link to="/settings" className="mb-4">
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarUpdated;
