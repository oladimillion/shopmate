import React from "react";
import HorizontalLine from ".";
import { shallow } from "enzyme";

describe("<HorizontalLine /> ", () => {
  it("renders HorizontalLine component without crashing", () => {
    shallow(<HorizontalLine />);
  });
});
