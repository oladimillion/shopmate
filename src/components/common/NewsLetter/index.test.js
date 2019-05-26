import React from "react";
import NewsLetter from ".";
import { shallow } from 'enzyme';


describe("<NewsLetter /> ", () => {
  it("renders NewsLetter component without crashing", () => {
    shallow(
      <NewsLetter />
    );
  });
});
