import React from "react";
import { ItemButton, ItemLink } from ".";
import { shallow } from 'enzyme';

const func = ()=>{};

describe("<ItemButton /> ", () => {
  const props = {
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
  };
  it("renders ItemLink component without crashing", () => {
    shallow(<ItemLink {...props} />);
  });
});
