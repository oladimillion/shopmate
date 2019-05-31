import React from "react";
import HorizontalSpacing from ".";
import { shallow } from "enzyme";

describe("<HorizontalSpacing /> ", () => {
  it("renders HorizontalSpacing component without crashing", () => {
    shallow(<HorizontalSpacing />);
  });
});
