import React from "react";
import CategoryNavSection from ".";
import { shallow } from 'enzyme';


describe('<CategoryNavSection /> ', () => {
  it('renders CategoryNavSection component without crashing', () => {
    shallow(<CategoryNavSection />);
  });
});
