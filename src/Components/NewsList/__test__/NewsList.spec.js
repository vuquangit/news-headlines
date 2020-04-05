import React from "react";
import { render } from "@testing-library/react";

import NewsList from "..";
import { mockData } from "../mock/newsList";

describe("News List", () => {
  it("Test get default NewsList no params ", () => {
    // test snapshot
    const wrapper = render(<NewsList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Test get default NewsList with data ", () => {
    // test snapshot
    const wrapper = render(<NewsList items={mockData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
