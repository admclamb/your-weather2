import React from "react";
import BreadCrumbFooter from "./BreadCrumbFooter";
import "./Footer.css";
const Footer = ({ location }) => {
  return (
    <footer className="footer">
      <BreadCrumbFooter location={location} />
      <section className="footer-main">
        <div className="container pt-5 pb-5 d-flex justify-content-between justify-content-md-start">
          <div className="credit me-4">
            <h6>THIS IS A MOCK APP</h6>
            <p>
              This is a MOCK WEBSITE. All credit goes to{" "}
              <a href="https://openweathermap.org/" className="links-tag">
                OpenWeather
              </a>{" "}
              for all weather data. Credit also goes to{" "}
              <a href="https://newsapi.org/" className="links-tag">
                NewsData.io
              </a>{" "}
              This is a personal project.
            </p>
          </div>
          <div className="links">
            <h6>Links</h6>
            <ul>
              <li className="mb-2">
                <a
                  href="https://openweathermap.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenWeatherApi
                </a>
              </li>
              <li className="mb-2">
                <a href="https://newsdata.io/" target="_blank" rel="noreferrer">
                  NewsData.io
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/admclamb"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="text-center p-3 bg-dark text-light">
        Website Made with ❤
      </div>
    </footer>
  );
};

export default Footer;
