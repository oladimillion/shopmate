import React from "react";
import { Checkout } from ".";
import { shallow } from 'enzyme';
import "../../__test__/setup/setupEnzyme";

describe('<Checkout /> ', () => {
  it('renders Checkout component without crashing', () => {
    shallow(<Checkout />);
  });
});


