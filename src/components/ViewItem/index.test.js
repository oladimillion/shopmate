import React from "react";
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { ViewItem } from ".";
import initState from "../../reducers/initState";
import setup from "../../__test__/setup";

const func = jest.fn();


describe('<ViewItem /> ', () => {

  const props = {
    getProductById: func, 
    getProductReview: func, 
    addProductReview: func,
    addCart: func, 
    scrollTo: func,

    user: initState.user,
    cart: initState.cart,
    productById: initState.productById,
    productReview: {
      ...initState.productReview,
      isLoading: true,
    },
    ...setup,
  };

  const wrapper = shallow(
    <ViewItem {...props} />
  );
  it('renders ViewItem component without crashing', () => {
    wrapper.instance().addCart({});
    wrapper.instance().getParams;
    wrapper.instance().getProductById(1);
    wrapper.instance().getProductReview(1);
    wrapper.instance().getImageLink("image.png");
    wrapper.instance().makeRequest();
    wrapper.instance().getProductAndReview();
    wrapper.instance().setAttribute({size: "M"});
    wrapper.instance().setProductImage("image.png");
  });
});

