import React, { useState, useCallback } from "react";
import moment from "moment";
import { Modal, Button } from "antd";

import NewsDetail from "Components/NewsDetail";
import "./newsItem.scss";

const NewsItem = (props) => {
  const {
    title = "",
    description = "",
    urlToImage = "",
    publishedAt = "",
    source = {},
  } = props;

  const [visibleModal, setVisibleModal] = useState(false);
  const handleShowModal = useCallback(() => {
    setVisibleModal(true);
  }, []);
  const handleCancelModal = useCallback(() => {
    setVisibleModal(false);
  }, []);

  return (
    <div className="news-item">
      <div className="news-item__img">
        {urlToImage ? (
          <div
            style={{ backgroundImage: `url(${urlToImage})` }}
            title={title}
            onClick={handleShowModal}
            className="news-item__img--content"
          />
        ) : (
          <div className="news-item__img--content" onClick={handleShowModal}>
            <div className="news-item__img--empty">
              <span>News Headlines</span>
            </div>
          </div>
        )}
      </div>
      <div className="news-item__info">
        <h3 onClick={handleShowModal} className="news-item__info--title">
          {title}
        </h3>
        <div>
          {source.name && (
            <span className="news-item__info--source">{source.name}</span>
          )}
          {publishedAt && (
            <span className="news-item__info--published-at">
              {moment(publishedAt).fromNow()}
            </span>
          )}
        </div>
        {description && (
          <span className="news-item__info--description">{description}</span>
        )}
      </div>
      <Modal
        title={null}
        visible={visibleModal}
        onCancel={handleCancelModal}
        className="modal-detail"
        footer={[
          <Button key="back" onClick={handleCancelModal}>
            Cancel
          </Button>,
        ]}
        centered
      >
        <NewsDetail {...props} />
      </Modal>
    </div>
  );
};

export default NewsItem;
