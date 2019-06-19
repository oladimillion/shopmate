import React from "react";
import Finish from ".";
import { shallow } from "enzyme";

const func = jest.fn();

describe("<Finish /> ", () => {
  it("renders Finish component without crashing", () => {

  const props = {
    openViewOrderModal: func,
  };
    shallow(<Finish {...props} />);
  });
});

