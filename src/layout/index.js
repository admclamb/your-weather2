import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Daily from "../daily/Daily";
import Today from "../today/Today";
import Hourly from "../hourly/Hourly";
import Home from "../home/Home";
import Settings from "../settings/Settigs";

const Layout = ({ weather, setCoords, location, news, setUnitOfMeasure }) => {
  return (
    <>
      <Header weather={weather} setCoords={setCoords} location={location} />
      <Routes>
        <Route path="/daily" element={<Daily weather={weather} />} />
        <Route path="/today" element={<Today weather={weather} />} />
        <Route path="/hourly" element={<Hourly weather={weather} />} />
        <Route
          path="/"
          element={<Home weather={weather} news={news} location={location} />}
        />
        <Route
          path="/settings"
          element={
            <Settings weather={weather} setUnitOfMeasure={setUnitOfMeasure} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
