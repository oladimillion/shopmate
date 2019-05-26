import React from "react";
import PanelSection from ".";
import { shallow } from 'enzyme';

const func = jest.fn();

describe("<PanelSection /> ", () => {
  const props = {
    title: "size",
    className: "class",
    titleClassName: "title__class",
  };
  it("renders PanelSection component without crashing", () => {
    shallow(
       <PanelSection {...props}>
         <span>child</span>
      </PanelSection>
    );
  });
});
