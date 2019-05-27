import React from "react";
import Pagination from ".";
import { shallow } from 'enzyme';

const func = jest.fn();

describe("<Pagination /> ", () => {
  const props = {
    page: 1,
    pageCount: 4,
    gotoPage: func,
    prevPage: func,
    nextPage: func,
  };
  it("renders Pagination component without crashing", () => {
    shallow(
      <Pagination {...props} />
    );
  });
});
