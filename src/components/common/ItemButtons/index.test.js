import React from "react";
import { ItemButton, ItemLink } from ".";
import { shallow } from "enzyme";

const func = jest.fn();

describe("<ItemButton /> ", () => {
  const props = {
    disable: false,
    name: "submit",
    className: "style",
    onClick: func,
    type: "submit",
  };
  it("renders ItemButton component without crashing", () => {
    shallow(<ItemButton {...props} />);
  });
});

describe("<ItemLink /> ", () => {
  const props = {
    to: "/profile",
    name: "profile",
    className: "profile",
    onClick: func,
    disable: false,
  };
  it("renders ItemLink component without crashing", () => {
    shallow(<ItemLink {...props} />);
  });
});
