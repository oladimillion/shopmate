import React from "react";
import { ViewCart } from ".";
import { shallow } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();

describe('<ViewCart /> ', () => {

  const props = {
    closeModal: func,
    getCart: func,
    getCartAmount: func,
    deleteCartItem: func,
    updateCart: func,

    user: initState.user,
    openModal: false,
    cart: initState.cart,
    ...setup,
  };


  const wrapper = shallow(
    <ViewCart {...props} />
  );
  it('renders ViewCart component without crashing', () => {
    wrapper.instance().getImageLink("image.png");
    wrapper.instance().updateCart({}, {});
    wrapper.instance().removeItemFromCart({});
  });
});

