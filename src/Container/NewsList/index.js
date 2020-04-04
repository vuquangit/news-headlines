import React from "react";
import { isEmpty } from "lodash";

import NewsItem from "Container/NewsItem";
import "./newsList.scss";

const NewsList = ({ items = [] }) => {
  const _renderItem = () =>
    !isEmpty(items) &&
    items.length > 0 &&
    items.map((item, idx) =>
      item.title ? <NewsItem key={idx} {...item} /> : null
    );

  return <div className="news-list">{_renderItem()}</div>;
};

export default NewsList;
