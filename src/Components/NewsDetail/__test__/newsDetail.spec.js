import React from "react";
import { render } from "@testing-library/react";

import NewsDetail from "..";
import { mockData } from "../mock";

describe("News Detail", () => {
  it("Test get default NewsDetail no params ", () => {
    // test snapshot
    const wrapper = render(<NewsDetail />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Test get default NewsDetail with data ", () => {
    // test snapshot
    const wrapper = render(<NewsDetail {...mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
