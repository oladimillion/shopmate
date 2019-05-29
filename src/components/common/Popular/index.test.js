import React from "react";
import { Popular } from ".";
import { shallow } from 'enzyme';
import initState from "../../../reducers/initState";

const func = jest.fn();

describe('<Popular /> ', () => {

  const props = {
    title: "Popular",
    getPopularProducts: func,
    popularProducts: initState.popularProducts,
    scrollDistance: 200,
    document: {
      getElementById:  () => {
        return {
          scrollBy: () => {
            return null;
          }
        }
      },
    }
  };

  const wrapper = shallow(
    <Popular {...props} />
  );
  it('renders Popular component without crashing', () => {
    wrapper.instance().getPopularProducts();
    wrapper.instance().horizontalScroll();
  });
});

