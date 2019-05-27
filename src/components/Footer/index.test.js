import React from "react";
import Footer from ".";
import { shallow } from 'enzyme';


describe('<Footer /> ', () => {
  it('renders Footer component without crashing', () => {
    shallow(<Footer />);
  });
});
