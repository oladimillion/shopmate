import React from "react";
import { Payment } from ".";
import { shallow } from 'enzyme';
import initState from "../../../reducers/initState";

const func = jest.fn();

describe('<Payment /> ', () => {

  const props = {
    paymentRegex: ()=>{
      return {
        validity: /([\d]{2})([\d]{2})/,
        ccv: /([\d]{3})/,
        card_number: /([\d]{4})([\d]{4})([\d]{4})([\d]{4})/,
      }
    },
    payment: {
      ccv: "",
      validity: "",
      card_number: "",
      holder_name: "",
    },
    cart: initState.cart,
  };

  const wrapper = shallow(
    <Payment {...props} />
  );
  it('renders Payment component without crashing', () => {
    wrapper.instance().setPaymentOption("card");
  });
});
