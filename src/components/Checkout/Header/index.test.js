import React from "react";
import Header from ".";
import { shallow } from 'enzyme';

const func = jest.fn();

describe("<Header /> ", () => {

  const props = {
    className: "checkout",
    step: 4,
  };

  it("renders Header component without crashing", () => {
    shallow(<Header {...props} />);
  });
});
