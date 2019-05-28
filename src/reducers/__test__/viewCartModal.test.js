
import * as types from "../../actions/types";
import initState from "../initState"
import ViewCartModal from "../viewCartModal";

describe('ViewCartModal reducer', () => {
  it('should update to the store openModal', () => {
    expect(
      ViewCartModal({ openModal: false }, {
        type: types.SHOW_VIEW_CART_MODAL,
      }).openModal,
    ).toEqual(true);
    expect(
      ViewCartModal({ openModal: false }, {
        type: types.HIDE_VIEW_CART_MODAL,
      }).openModal,
    ).toEqual(false);
  });
});

