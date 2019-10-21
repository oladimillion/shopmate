import React from "react";
import PanelSection from ".";
import { shallow } from "enzyme";

const func = jest.fn();

describe("<PanelSection /> ", () => {

  const props = {
    name: "pound",
    iconClassName: "icon__class",
  };

  it("renders PanelSection component without crashing", () => {
    shallow(<PanelSection {...props} />);
  });
});
