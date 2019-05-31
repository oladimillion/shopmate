import React from "react";
import { shallow } from "enzyme";
import { Review } from ".";
import initState from "../../../reducers/initState";
import setup from "../../../__test__/setup";

const func = jest.fn();

describe("<Review /> ", () => {

  const props = {
    addProductReview: func,
    user: initState.user,
    productReview: initState.productReview,
    setErrorMessage: func,
    ...setup,
  };

  const wrapper = shallow(
    <Review {...props} />
  );
  it("renders Review component without crashing", () => {
    wrapper.instance().onChange({
      target: {
        name: "rating",
        value: 3,
      }
    });
    wrapper.instance().isValidData();
    wrapper.instance().setErrorMessage("error occured");
    wrapper.instance().onSubmit({
      preventDefault: func
    });
  });
});

