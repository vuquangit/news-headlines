import React from "react";
import { Input } from "..";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("Test get default Input no params ", () => {
    // test snapshot
    const wrapper = render(<Input />);
    expect(wrapper).toMatchSnapshot();
  });

  it("large input", () => {
    const wrapper = render(<Input size="large" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("value input", () => {
    const wrapper = render(<Input value="value input..." />);
    expect(wrapper).toMatchSnapshot();
  });

  it("className input", () => {
    const wrapper = render(<Input className="class-input" />);
    expect(wrapper).toMatchSnapshot();
  });
});
