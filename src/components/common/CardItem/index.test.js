import React from "react";
import CardItem from ".";
import { shallow } from "enzyme";

const func = jest.fn();

describe("<CardItem /> ", () => {

  const props = {
    onClick: func,
    product: {
      name: "shirt", 
      price: "13", 
      product_id: 2, 
      thumbnail: "shirt.png"
    },
    className: "icon__class",
  };

  it("renders CardItem component without crashing", () => {
    shallow(<CardItem {...props} />);
  });
});
