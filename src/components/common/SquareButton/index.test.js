import React from "react";
import SquareButton from ".";
import { shallow } from 'enzyme';

const func = jest.fn();

describe("<SquareButton />", () => {
  const props = {
    name: "X",
    id: "small",
    label: "small",
    onClick: func,
    className: "class",
  };
  it("renders SquareButton component without crashing", () => {
    shallow(<SquareButton {...props} />);
  });
});
