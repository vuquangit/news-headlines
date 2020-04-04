import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./newsDetail.scss";

const NewsDetail = ({
  source = {},
  author = "",
  title = "",
  description = "",
  urlToImage = "",
  publishedAt = "",
  content = "",
  url = "",
}) => {
  const isMoreChars = /\[\+\w+\s+\w+\]$/.test(content);
  const _content = content && content.replace(/\[\+\w+\s+\w+\]$/, "");

  return (
    <div className="news-detail">
      <div className="news-detail__header">
        <h1 className="news-detail__header--title">{title}</h1>
        <div className="news-detail__header--subtitle">
          {source.name && <span className="p-source">{source.name}</span>}
          {publishedAt && (
            <div className="p-time">
              <FontAwesomeIcon icon={faClock} className="p-time__icon" />
              <span className="p-time__content">
                {moment(publishedAt).format("LLLL")}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="news-detail__content">
        <h2 className="news-detail__content--description">{description}</h2>
        {urlToImage && (
          <img
            src={urlToImage}
            alt={description}
            className="news-detail__content--img"
          />
        )}
        <p>
          {_content}
          {isMoreChars && (
            <span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-detail__content--more"
              >
                more
              </a>
            </span>
          )}
        </p>
        <p className="news-detail__content--author">{author}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-detail__content--source"
          >
            {`Original news: ${url}`}
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
