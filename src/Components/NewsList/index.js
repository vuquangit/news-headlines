import React from "react";
import { isEmpty } from "lodash";

import NewsItem from "Components/NewsItem";
import "./newsList.scss";

const NewsList = ({ items = [] }) => {
  return (
    <div className="news-list">
      {!isEmpty(items) &&
        items.map((item, idx) =>
          item.title ? <NewsItem key={idx} {...item} /> : null
        )}
    </div>
  );
};

export default NewsList;
