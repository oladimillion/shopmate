import React from "react";
import { shallow } from "enzyme";
import ProfileForm from ".";

const func = jest.fn();


describe("<ProfileForm /> ", () => {

  const props = {
    title: "",
    inputDataArray: [],
    address: func,
    onChange: <div>children</div>,
  };

  it("renders ProfileForm component without crashing", () => {
    shallow(
      <ProfileForm {...props} />
    );

  });
});

