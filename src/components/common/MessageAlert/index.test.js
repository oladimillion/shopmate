import React from "react";
import MessageAlert from ".";
import { shallow } from 'enzyme';

describe("<MessageAlert /> ", () => {
  const props = {
    message: "this field is required",
    hasError: true,
  };
  it("renders MessageAlert component without crashing", () => {
    shallow(<MessageAlert {...props} />);
  });
});
