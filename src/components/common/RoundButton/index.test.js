import React from "react";
import RoundButton from ".";
import { shallow } from "enzyme";

const func = jest.fn();

describe("<RoundButton />", () => {
  const props = {
    icon: "pound",
    onClick: func,
    className: "class",
    iconClassName: "icon__class",
  };
  it("renders RoundButton component without crashing", () => {
    shallow(<RoundButton {...props} />);
  });
});
