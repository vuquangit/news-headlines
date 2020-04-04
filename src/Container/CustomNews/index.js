import React, { useCallback } from "react";
import { Menu, Dropdown } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { get, isEqual } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

import menuList from "./menuList";
import { updateKeyword } from "Redux/TopHeadlines/headlines.action";
import "./customNews.scss";

const CustomNews = ({ match = {}, history = {} }) => {
  const dispatch = useDispatch();

  const keyword = useSelector((state = {}) =>
    get(state, "topHeadlines.keyword", "")
  );

  const handleCustomClick = useCallback(
    async ({ key }) => {
      const val = menuList[key];
      if (!isEqual(keyword, val)) {
        await dispatch(updateKeyword(val));

        if (match.path !== "/") history.push("/");
      }
    },
    [dispatch, history, keyword, match]
  );

  const handleCustomClear = useCallback(async () => {
    await dispatch(updateKeyword());
  }, [dispatch]);

  const menu = (
    <Menu onClick={handleCustomClick}>
      {menuList &&
        menuList.length > 0 &&
        menuList.map((item, idx) => <Menu.Item key={idx}>{item}</Menu.Item>)}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className="custom-news">
      <div onClick={(e) => e.preventDefault()} className="custom-news__content">
        {keyword ? keyword : "Custom News"}
        {menuList && menuList.length > 0 ? (
          <FontAwesomeIcon
            icon={faAngleDown}
            className="custom-news__content--icon"
          />
        ) : null}
        {keyword && (
          <div onClick={handleCustomClear}>
            <FontAwesomeIcon
              icon={faTimes}
              className="custom-news__content--icon"
            />
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default withRouter(CustomNews);
