import React from "react";
import Footer from "./footer/Footer";

const NoWeather = () => {
  return (
    <>
      <header className="no-weather-header">
        <nav>
          <h1>Your Weather</h1>
        </nav>
        <form>
          <label>
            Search
            <input type="text" id="search" />
          </label>
        </form>
      </header>
      <main></main>
      <Footer />
    </>
  );
};

export default NoWeather;
