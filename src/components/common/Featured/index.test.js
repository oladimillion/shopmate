import React from "react";
import Featured from ".";
import { shallow } from 'enzyme';

describe("<Featured /> ", () => {
  it("renders Featured component without crashing", () => {
    shallow(<Featured />);
  });
});
