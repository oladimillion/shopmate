import React from "react";
import RadioButton from ".";
import { shallow } from 'enzyme';

const func = ()=>{};

describe("<RadioButton /> ", () => {
  const props = {
    name: "size",
    id: "size",
    onClick: func,
    className: "class",
  };
  it("renders RadioButton component without crashing", () => {
    shallow(
      <RadioButton {...props} />
    );
  });
});
