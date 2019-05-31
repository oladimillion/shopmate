import React from "react";
import NavBarLight from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";
import setup from "../../../__test__/setup";

const func = jest.fn();

describe("<NavBarLight /> ", () => {
  const props = {
    openViewCartModal: func,
    openRegisterModal: func,
    openLoginModal: func,
    logout: func,
    cartQuantity: "9+",

    user: initState.user,
    cart: initState.cart,
    ...setup,
  };
  it("renders NavBarLight component without crashing", () => {
    shallow(<NavBarLight {...props} />);
  });
});
