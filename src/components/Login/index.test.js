import React from "react";
import { Login } from ".";
import { shallow } from "enzyme";
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();

describe("<Login /> ", () => {

  const props = {
    closeLoginModal: func,
    openRegisterModal: func,
    setErrorMessage: func,
    login: func,
    getCart: func,
    getCartAmount: func,

    user: initState.user,
    open: false,
    ...setup,
  };

  const wrapper = shallow(
    <Login {...props} />
  );
  it("renders Login component without crashing", () => {
    wrapper.instance().onChange({
      target: {
        name: "email",
        value: "email@email.com",
      }
    });
    wrapper.instance().onSubmit({
      preventDefault: func
    });
    wrapper.instance().openRegisterModal();
    wrapper.instance().closeLoginModal();
  });
});

