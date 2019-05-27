import React from "react";
import { shallow } from 'enzyme';
import Homepage from ".";
import setup from "../../__test__/setup";
import initState from "../../reducers/initState";

const func = jest.fn();

describe('<Homepage /> ', () => {
  const props = {
    getPopularProducts: func,
    popularProducts: initState.popularProducts,
    ...setup,
  };
  it('renders Homepage component without crashing', () => {
    shallow(<Homepage {...props} />);
  });
});
