import React from "react";
import CheckboxLabel from ".";
import { shallow } from "enzyme";

const func = jest.fn();

describe("<CheckboxLabel /> ", () => {

  const props = {
    className: "class",
    name: "checkbox",
    label: "checkbox",
    value: true,
    onChange: func,
    labelClassName: "label__class",
    parentClassName: "parent__class",
    id: "2828",
  };

  it("renders CheckboxLabel component without crashing", () => {
    shallow(<CheckboxLabel {...props} />);
  });
});
