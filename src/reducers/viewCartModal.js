import * as types from "../actions/types";

export default (state={ openModal: false }, action) => {
  switch (action.type) {
    case types.SHOW_VIEW_CART_MODAL:
      return { openModal: true };
    case types.HIDE_VIEW_CART_MODAL:
      return { openModal: false };
    default:
      return state;
  }
}
