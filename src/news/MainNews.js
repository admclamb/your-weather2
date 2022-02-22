import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import Spinner from "../utils/Spinner";
const MainNews = ({ news }) => {
  if (!objHasProperties(news) && news) return <Spinner />;
  const { title, description, author, url, urlToImage } = news.articles[0];
  // const changeNews = () => {
  //   if (currentIndex === news.articles.length - 1) {
  //     setCurrentIndex(0);
  //   } else {
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  // window.setInterval(changeNews, 10000);
  return (
    <div
      className="jumbotron-fluid d-flex flex-column justify-content-center p-4 mb-2"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${urlToImage})`,
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
        <p className="text-light">By: {author}</p>
        <a
          href={url}
          className="text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for more &rarr;
        </a>
      </div>
    </div>
  );
};

export default MainNews;
