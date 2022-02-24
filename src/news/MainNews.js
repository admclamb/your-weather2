import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
const MainNews = ({ news }) => {
  if (objHasProperties(news) && news.status === "success") {
    const { title, description, creator, link, image_url } = news.results[0];
    return (
      <div
        className="jumbotron-fluid d-flex flex-column justify-content-center p-4 mb-2"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "40vh",
        }}
      >
        <h6 className="display-6 text-light mt-5">{title}</h6>
        <p className="lead mt-3 text-light d-none d-md-block pb-md-3">
          {description}
        </p>
        <div className="d-flex mt-auto justify-content-between">
          {creator !== null && (
            <p className="text-light">Creator: {creator[0]}</p>
          )}
          <a
            href={link}
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for more &rarr;
          </a>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MainNews;
