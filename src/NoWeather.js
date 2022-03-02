import React from "react";
import Footer from "./footer/Footer";
import SearchForm from "./header/SearchForm";
import NewsWidgetSM from "./news/NewsWidgetSM";
import "./NoWeather.css";
const NoWeather = ({ setCoords, news }) => {
  return (
    <>
      <header className="no-weather-header text-light">
        <section className="container">
          <nav className="pt-2 pb-2">
            <a className="navbar-brand">Weatherly</a>
          </nav>
          <section className="hero d-flex flex-column align-items-center no-weather-search">
            <h4 className="mb-3">Search Your City</h4>
            <SearchForm setCoords={setCoords} />
          </section>
        </section>
      </header>
      <main>
        {news && (
          <div className="container">
            <section className="row d-flex justify-content-between mb-4">
              <div className="col-12 col-md-4">
                <NewsWidgetSM news={news} index={0} />
              </div>
              <div className="col-12 col-md-4">
                <NewsWidgetSM news={news} index={1} />
              </div>
              <div className="col-12 col-md-4">
                <NewsWidgetSM news={news} index={3} />
              </div>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default NoWeather;
