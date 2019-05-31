import React from "react";
import NavBarDark from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";
import setup from "../../../__test__/setup";

const func = jest.fn();

describe("<NavBarDark /> ", () => {
  const props = {
    openViewCartModal: func,
    onSubmit: func,
    clearSearchField: func,

    user: initState.user,
    open: false,
    className: "hide",
    search: "italy",
    cartQuantity: "9+",
    ...setup,
  };
  it("renders NavBarDark component without crashing", () => {
    shallow(<NavBarDark {...props} />);
  });
});
