import React from "react";
import { NavBar } from ".";
import { shallow } from 'enzyme';
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();

describe('<NavBar /> ', () => {

  const props = {
    openViewCartModal: func,
    openLoginModal: func,
    openRegisterModal: func,
    searchProducts: func,
    getShippingRegion: func,
    logout: func,

    allProduct: initState.allProduct,
    user: initState.user,
    cart: initState.cart,
    ...setup,
  };

  const wrapper = shallow(
    <NavBar {...props} />
  );
  it('renders Checkout component without crashing', () => {
    wrapper.instance().cartQuantity({});
    wrapper.instance().onChange({
      target: {
        name: "search",
        value: "Dame",
      }
    });
    wrapper.instance().onSubmit({
      preventDefault: func
    });
  });
});

