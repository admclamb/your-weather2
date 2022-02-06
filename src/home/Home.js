import React from "react";
import MainNews from "../news/MainNews";
import NationalAlerts from "../nationalAlerts/NationalAlerts";
import Current from "../current/Current";
import Forecast from "../forecast/Forecast";
const Home = ({ weather, news, location }) => {
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
        </article>
      </section>
    </main>
  );
};

export default Home;
