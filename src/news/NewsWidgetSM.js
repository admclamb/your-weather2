import React from "react";
import { objHasProperties } from "../utils/objHasProperties";

const NewsWidgetSM = ({ news, index }) => {
  if (objHasProperties(news) && news.status === "success") {
    if (news.results) {
      console.log(news.results);
      const { creator, title, link, image_url } = news.results[index];
      return (
        <div className="border p-3 mt-3 bg-light">
          <h5 className="mb-4">{title}</h5>
          {image_url && <img src={image_url} alt={title} width="100%" />}
          <div className="d-flex flex-column mt-2 align-items-end">
            {creator !== null && (
              <p className="text-muted">Source: {creator[0]}</p>
            )}
            <a href={link} target="_blank" rel="noreferrer">
              Click here for more &rarr;
            </a>
          </div>
        </div>
      );
    }
  }
  return null;
};

export default NewsWidgetSM;
