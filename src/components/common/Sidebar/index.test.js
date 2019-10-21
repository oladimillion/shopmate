import React from "react";
import { Sidebar } from ".";
import { shallow } from "enzyme";
import initState from "../../../reducers/initState";
import setup from "../../../__test__/setup";

const func = jest.fn();

describe("<Sidebar /> ", () => {

  const props = {
    getCategories: func,
    getDepartments: func,
    getQueryParams: ()=> {
      return {
        departments: 1,
        categories: 1,
      }
    },

    departments: initState.departments,
    allProduct: initState.allProduct,
    categories: initState.categories,
    ...setup,
  };

  const wrapper = shallow(
    <Sidebar {...props} />
  );
  it("renders Sidebar component without crashing", () => {
    wrapper.instance().getQuery();
    wrapper.instance().clearAll();
    wrapper.instance().getCategoryList(1);
    wrapper.instance().getSeletectedCategoryName(1);
    wrapper.instance().getSeletectedDepartmentName(1);
    wrapper.instance().removeFilter({});
    wrapper.instance().submit({});
    wrapper.instance().selectCategory({
      category: {
        category_id: 1,
      }
    });
    wrapper.instance().selectDepartment({
      department: {
        department_id: 1,
      }
    });
  });
});

