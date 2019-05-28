import * as types from "../../actions/types";
import initState from "../initState"
import LoginModal from "../loginModal.js";

describe('LoginModal reducer', () => {
  it('should update to the store openModal', () => {
    expect(
      LoginModal({ openModal: false }, {
        type: types.SHOW_LOGIN_MODAL,
      }).openModal,
    ).toEqual(true);
    expect(
      LoginModal({ openModal: false }, {
        type: types.HIDE_LOGIN_MODAL,
      }).openModal,
    ).toEqual(false);
  });
});
