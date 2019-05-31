import React from "react";
import SelectQuantity from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";

const func = jest.fn();

describe("<SelectQuantity /> ", () => {

  const props = {
    onChange: func,
  };

  const wrapper = shallow(
    <SelectQuantity {...props} />
  );
  it("renders SelectQuantity component without crashing", () => {
    wrapper.instance().updateQuantity(1);
  });
});
