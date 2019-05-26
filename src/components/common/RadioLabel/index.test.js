import React from "react";
import RadioLabel from ".";
import { shallow } from 'enzyme';

const func = ()=>{};

describe("<RadioLabel /> ", () => {
  const props = {
    name: "size",
    id: "size",
    onClick: func,
    className: "class",
    checked: true,
  };
  it("renders RadioLabel component without crashing", () => {
    shallow(<RadioLabel {...props} />);
  });
});
