
import * as types from "../../actions/types";
import initState from "../initState"
import ViewOrderModal from "../viewOrderModal";

describe('ViewOrderModal reducer', () => {
  it('should update to the store openModal', () => {
    expect(
      ViewOrderModal({ openModal: false }, {
        type: types.SHOW_VIEW_ORDER_MODAL,
      }).openModal,
    ).toEqual(true);
    expect(
      ViewOrderModal({ openModal: false }, {
        type: types.HIDE_VIEW_ORDER_MODAL,
      }).openModal,
    ).toEqual(false);
  });
});

