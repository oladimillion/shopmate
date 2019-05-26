import React from "react";
import Loader from ".";
import { shallow } from 'enzyme';

describe("<Loader /> ", () => {
  const props = {
    className: "class",
  };
  it("renders Loader component without crashing", () => {
    shallow(<Loader {...props} />);
  });
});
