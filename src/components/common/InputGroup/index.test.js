import React from "react";
import InputGroup, { InputWrapper } from ".";
import { shallow } from 'enzyme';

describe("<InputGroup /> ", () => {
  const props = {
    wrapperClassname: "class",
    children: <div>child</div>,
  };
  it("renders InputGroup component without crashing", () => {
    shallow(<InputGroup {...props} />);
  });
});

describe("<InputWrapper /> ", () => {
  const props = {
    children: <div>child</div>,
  };
  it("renders InputWrapper component without crashing", () => {
    shallow(<InputWrapper {...props} />);
  });
});

