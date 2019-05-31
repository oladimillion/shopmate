import React from "react";
import { Checkout } from ".";
import { shallow } from "enzyme";
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();

describe("<Checkout /> ", () => {

  const props = {
    getTax: func,
    createOrder: func,
    createStripeCharge: func,
    genStripeToken: func,
    getShippingRegionById: func,
    setErrorMessage: func,
    emptyCart: func,

    user: initState.user,
    stripeToken: initState.stripeToken,
    stripeCharge: initState.stripeCharge,
    order: initState.order,
    cart: initState.cart,
    tax: initState.tax,
    shippingRegionById: initState.shippingRegionById,
    shippingRegion: initState.shippingRegion,
    ...setup,
  };

  const wrapper = shallow(
    <Checkout {...props} />
  );
  it("renders Checkout component without crashing", () => {
    wrapper.instance().createStripeCharge({});
    wrapper.instance().createOrder(1);
    wrapper.instance().renderStepComponent();
    wrapper.instance().changeStep(-1);
    wrapper.instance().setErrorMessage("error occured");
    wrapper.instance().clearErrorMessage();
    wrapper.instance().makePayment();
    wrapper.instance().urlFormEncoded();
    wrapper.instance().mask({value: "111", max: 3});
    wrapper.instance().unmask({
      value: "22/05", 
      pattern: "$1/$2", 
      regex: /([\d]{3})/,
      max: 4
    });
    wrapper.instance().onChange({
      name: "ccv",
      value: "111",
    });
    wrapper.instance().paymentRegex();
    wrapper.instance().validDeliveryData();
    wrapper.instance().validPaymentData();
    wrapper.instance().setLevelValues({
      name: "ccv",
      level: "payment",
      value: "111",
    });
    wrapper.instance().setStateWithMaskValue({
      name: "ccv",
      level: "payment",
      value: "111",
    });
    wrapper.instance().getMessage();
    wrapper.instance().getError();
    wrapper.instance().isLoading();
  });
});


