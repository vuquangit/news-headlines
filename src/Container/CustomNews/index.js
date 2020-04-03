import React from "react";
import { Menu, Dropdown } from "antd";

import menuList from "./menuList";

const CustomNews = () => {
  const menu = (
    <Menu>
      {menuList &&
        menuList.length > 0 &&
        menuList.map((item, idx) => <Menu.Item key={idx}>{item}</Menu.Item>)}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div onClick={e => e.preventDefault()}>Custom News</div>
    </Dropdown>
  );
};

export default CustomNews;
