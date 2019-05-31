import React from "react";
import LabelInput from ".";
import { shallow } from "enzyme";

const func = ()=>{};

describe("<LabelInput /> ", () => {
  const props = {
    name: "email",
    className: "class",
    onChange: func,
    type: "text",
    label: "email",
    value: "email@email.com",
    icon: "cancel",
    placeholder: "email",
    required: true,
  };
  it("renders LabelInput component without crashing", () => {
    shallow(<LabelInput {...props} />);
    shallow(
      <LabelInput {...props}>
        <div>child</div>
      </LabelInput>
    );
  });
});
