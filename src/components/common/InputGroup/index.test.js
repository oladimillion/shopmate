import React from "react";
import InputGroup, { InputWrapper } from ".";
import { shallow } from "enzyme";

describe("<InputGroup /> ", () => {
  const props = {
    wrapperClassname: "class",
  };
  it("renders InputGroup component without crashing", () => {
    shallow(<InputGroup {...props}><div>child</div></InputGroup>);
  });
});

describe("<InputWrapper /> ", () => {
  it("renders InputWrapper component without crashing", () => {
    shallow(<InputWrapper><div>child</div></InputWrapper>);
  });
});

