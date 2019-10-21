import React from "react";
import Finish from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";

const func = jest.fn();

describe("<Finish /> ", () => {
  it("renders Finish component without crashing", () => {

  const props = {
    openViewOrderModal: func,
    orderById: initState.orderById,
  };
    shallow(<Finish {...props} />);
  });
});

