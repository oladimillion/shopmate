import React from "react";
import { Register } from ".";
import { shallow } from "enzyme";
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();

describe("<Register /> ", () => {

  const props = {
    closeRegisterModal: func,
    openLoginModal: func,
    setErrorMessage: func,
    signup: func,
    getCart: func,
    getCartAmount: func,

    user: initState.user,
    open: false,
    ...setup,
  };

  const wrapper = shallow(
    <Register {...props} />
  );
  it("renders Register component without crashing", () => {
    wrapper.instance().onChange({
      target: {
        name: "email",
        value: "email@email.com",
      }
    });
    wrapper.instance().onSubmit({
      preventDefault: func
    });
    wrapper.instance().openLoginModal();
    wrapper.instance().closeRegisterModal();
  });
});
