import React from "react";
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { Review } from ".";
import initState from "../../../reducers/initState";
import setup from "../../../__test__/setup";

const func = jest.fn();


describe('<Review /> ', () => {

  const props = {
    addProductReview: func,
    user: initState.user,
    productReview: initState.productReview,
    ...setup,
  };

  const wrapper = shallow(
    <Review {...props} />
  );
  it('renders Review component without crashing', () => {
    wrapper.instance().onChange({
      target: {
        name: "rating",
        value: 3,
      }
    });
    wrapper.instance().onSubmit({
      preventDefault: func
    });
  });
});

