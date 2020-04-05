import React from "react";
import { render } from "@testing-library/react";

import NewsItem from "..";
import { mockData } from "../mock/itemData";

describe("News Item", () => {
  it("Test get default NewsItem no params ", () => {
    // test snapshot
    const wrapper = render(<NewsItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Test get default NewsItem with data ", () => {
    // test snapshot
    const wrapper = render(<NewsItem {...mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
