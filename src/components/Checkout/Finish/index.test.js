import React from "react";
import Finish from ".";
import { shallow } from "enzyme";

describe("<Finish /> ", () => {
  it("renders Finish component without crashing", () => {
    shallow(<Finish />);
  });
});

