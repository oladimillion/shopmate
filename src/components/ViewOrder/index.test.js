import React from "react";
import { ViewOrder } from ".";
import { shallow } from "enzyme";
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();

describe("<ViewOrder /> ", () => {

  const props = {
    getOrderItems: func,
    closeViewOrderModal: func,

    user: initState.user,
    open: false,
    orderItems: initState.orderItems,
    ...setup,
  };

  const wrapper = 
  it("renders ViewOrder component without crashing", () => {
    shallow(
      <ViewOrder {...props} />
    );
  });
});

