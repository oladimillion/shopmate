import React from "react";
import ModalForm, { 
  ModalFormInput, 
  ModalFormButton, 
  ModalFormCheckboxLabel,
  ModalFormFooter,
} from ".";
import { shallow } from 'enzyme';

const func = ()=>{};

describe("<ModalFormInput /> ", () => {
  const props = {
    name: "email",
    type: "email",
    value: "email@email.com",
    onChange: func,
    placeholder: "email",
  };
  it("renders ModalFormInput component without crashing", () => {
    shallow(
      <ModalFormInput {...props} />
    );
  });
});

describe("<ModalFormButton /> ", () => {
  const props = {
    name: "submit",
  };
  it("renders ModalFormButton component without crashing", () => {
    shallow(
      <ModalFormButton {...props} />
    );
  });
});

describe("<ModalFormCheckboxLabel /> ", () => {
  const props = {
    name: "submit",
    onChange: func,
    id: "email",
    label: "email",
    value: "email@email.com",
  };
  it("renders ModalFormCheckboxLabel component without crashing", () => {
    shallow(
      <ModalFormCheckboxLabel {...props} />
    );
  });
});

describe("<ModalFormFooter /> ", () => {
  it("renders ModalFormFooter component without crashing", () => {
    shallow(
      <ModalFormFooter>
        <div>this is a footer</div>
      </ModalFormFooter>
    );
  });
});

describe("<ModalForm /> ", () => {
  const props = {
    open: true,
    title: "Form title",
    onCloseModal: func,
    onSubmit: func,
  };
  it("renders ModalForm component without crashing", () => {
    shallow(
      <ModalForm {...props}>
        <input type="text" />
      </ModalForm>
    );
  });
});
