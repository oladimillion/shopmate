
import * as types from "../../actions/types";
import initState from "../initState"
import RegisterModal from "../registerModal";

describe('RegisterModal reducer', () => {
  it('should update to the store openModal', () => {
    expect(
      RegisterModal({ openModal: false }, {
        type: types.SHOW_REGISTER_MODAL,
      }).openModal,
    ).toEqual(true);
    expect(
      RegisterModal({ openModal: false }, {
        type: types.HIDE_REGISTER_MODAL,
      }).openModal,
    ).toEqual(false);
  });
});

