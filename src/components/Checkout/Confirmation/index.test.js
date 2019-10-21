import React from "react";
import { Confirmation } from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";

const func = jest.fn();

describe("<Confirmation /> ", () => {

  const props = {
    onChange: func,

    user: initState.user,
    cart: initState.cart,
    delivery: initState.delivery,
    shippingRegionById: initState.shippingRegionById,
    tax: initState.tax,
    delivery: {
      shipping_id: 0,
      shipping_region_id: 0,
    },
    confirmation: {
      tax_id: 0,
    },
  };

  const wrapper = shallow(
    <Confirmation {...props} />
  );
  it("renders Confirmation component without crashing", () => {
    wrapper.instance().getAddressBody({
      delivery: props.delivery,
      customer: props.user.customer,
    });
    wrapper.instance().getShippingDetail();
    wrapper.instance().getGrandTotal("10", "($30)");
  });
});
