import React from "react";
import Footer from "./footer/Footer";
import SearchForm from "./header/SearchForm";
import "./NoWeather.css";
const NoWeather = ({ setCoords }) => {
  return (
    <>
      <header className="no-weather-header bg-caution">
        <section className="container">
          <nav className="pt-2 pb-2">
            <a className="navbar-brand">Weatherly</a>
          </nav>
          <section className="hero d-flex justify-content-center no-weather-search">
            <SearchForm setCoords={setCoords} />
          </section>
        </section>
      </header>
      <main></main>
      <Footer />
    </>
  );
};

export default NoWeather;
