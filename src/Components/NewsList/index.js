import React from "react";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

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

NewsList.propTypes = {
  items: PropTypes.array,
};

export default NewsList;
