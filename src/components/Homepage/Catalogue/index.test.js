import React from "react";
import { Catalogue } from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";
import setup from "../../../__test__/setup";

const func = jest.fn();

describe("<Catalogue /> ", () => {

  const props = {
    getProducts: func,
    searchProducts: func,
    getProductsByCategory: func,
    getProductsByDepartment: func,
    getCategories: func,
    getDepartments: func,

    allProduct: initState.allProduct,
    categories: initState.categories,
    departments: initState.departments,
    cart: initState.cart,
    user: initState.user,
    ...setup,
  };

  const wrapper = shallow(
    <Catalogue {...props} />
  );

  it("renders Catalogue component without crashing", () => {
    wrapper.instance().getPageNumber();
    wrapper.instance().getPageCount();
    wrapper.instance().getProducts();
    wrapper.instance().buyProduct({product_id: 2});
    wrapper.instance().gotoPage(1);
    wrapper.instance().getQuery(1);
    wrapper.instance().getQueryParams();
    wrapper.instance().nextPage();
    wrapper.instance().prevPage();
  });
});

