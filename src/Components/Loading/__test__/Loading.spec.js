import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Loading from "..";

describe("Loading", () => {
  it("test default Loading", () => {
    const AppLoading = shallow(<Loading />);
    expect(toJson(AppLoading)).toMatchSnapshot();
  });
});
