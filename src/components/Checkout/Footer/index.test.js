import React from "react";
import Footer from ".";
import { shallow } from 'enzyme';

const func = jest.fn();

describe("<Footer /> ", () => {

  const props = {
    changeStep: func,
    makePayment: func,
    createOrder: func,

    className: "checkout",
    step: 4,
  };

  it("renders Footer component without crashing", () => {
    shallow(<Footer {...props} />);
  });
});

