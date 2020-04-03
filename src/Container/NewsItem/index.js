import React from "react";
import moment from "moment";

import "./newsItem.scss";

const NewsItem = ({
  author = "",
  title = "",
  description = "",
  url = "",
  urlToImage = "",
  publishedAt = "",
  content = ""
}) => {
  return (
    <div className="news-item">
      <div className="news-item__img">
        {urlToImage ? (
          <div
            style={{ backgroundImage: `url(${urlToImage})` }}
            title={title}
            className="news-item__img--content"
          />
        ) : (
          <div className="news-item__img--content">
            <div className="news-item__img--empty">
              <span>News Headlines</span>
            </div>
          </div>
        )}
      </div>
      <div className="news-item__info">
        <h3 className="news-item__info--title">{title}</h3>
        {publishedAt && (
          <span className="news-item__info--published-at">
            {moment(publishedAt).fromNow()}
          </span>
        )}
        {description && (
          <span className="news-item__info--description">{description}</span>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
