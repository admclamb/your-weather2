import React from "react";
import { objHasProperties } from "../utils/objHasProperties";
import Spinner from "../utils/Spinner";

const NewsWidgetSM = ({ news }) => {
  if (!objHasProperties(news)) return <Spinner />;
  const { author, title, url, urlToImage } = news.articles[4];
  return (
    <div className="border p-3 mt-3 bg-light">
      <h5 className="mb-4">{title}</h5>
      <img src={urlToImage} alt={title} width="100%" />
      <div className="d-flex justify-content-between mt-2">
        <p className="text-muted">By: {author}</p>
        <a href={url} target="_blank" rel="noreferrer">
          Click here for more &rarr;
        </a>
      </div>
    </div>
  );
};

export default NewsWidgetSM;