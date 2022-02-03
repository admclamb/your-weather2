import React from "react";
import MainNews from "../news/MainNews";

const Home = ({ weather, news }) => {
  return (
    <main className="container mb-4 home">
      <h1>Home</h1>
      <section className="row">
        <article className="col-12">
          <MainNews news={news} />
        </article>
      </section>
      <section className="row">
        <article className="col col-12 col-md-8">
          {weather.alerts && <NationalAlerts alerts={weather.alerts} />}
        </article>
      </section>
    </main>
  );
};

export default Home;
