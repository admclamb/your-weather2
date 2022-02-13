import React from "react";
import MainNews from "../news/MainNews";
import NationalAlerts from "../nationalAlerts/NationalAlerts";
import Current from "../current/Current";
import Forecast from "../forecast/Forecast";
import AirQuality from "../airPollution/AirQuality";
import Today from "../today/Today";
import Map from "../map/Map";
import NewsWidgetSM from "../news/NewsWidgetSM";
import Hourly from "../hourly/Hourly";
const Home = ({ weather, news, location, airPollution, coords }) => {
  return (
    <main className="container mb-4 home">
      <section className="row">
        <article className="col-12">
          <MainNews news={news} />
        </article>
      </section>
      <section className="row">
        <article className="col col-12 col-md-8">
          {weather.alerts && <NationalAlerts alerts={weather.alerts} />}
          <Forecast weather={weather} />
          <Current weather={weather} location={location} />
          <Today weather={weather} />
          <Hourly weather={weather} />
          <Map coords={coords} />
        </article>
        <article className="col col-12 col-md-4">
          <AirQuality airPollution={airPollution} />
          <NewsWidgetSM news={news} index={4} />
          <NewsWidgetSM news={news} index={5} />
        </article>
      </section>
    </main>
  );
};

export default Home;
