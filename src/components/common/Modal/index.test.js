import React from "react";
import Modal from ".";
import { shallow } from "enzyme";

describe("<Modal /> ", () => {
  const props = {
    modalClassName: "modal__class",
    modalInnerClassName: "modal__inner__class",
    open: true,
  };
  it("renders Modal component without crashing", () => {
    shallow(
      <Modal {...props} >
        <div>children</div>
      </Modal>
    );
  });
});
