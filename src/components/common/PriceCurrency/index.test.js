import React from "react";
import PriceCurrency from ".";
import { shallow } from 'enzyme';

describe("<PriceCurrency /> ", () => {
  const props = {
    price: "13",
    className: "class",
  };
  it("renders PriceCurrency component without crashing", () => {
    shallow(
      <PriceCurrency {...props} />
    );
  });
});
