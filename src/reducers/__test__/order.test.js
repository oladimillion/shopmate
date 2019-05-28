import * as types from "../../actions/types";
import initState from "../initState"
import order from "../order";

describe('Order reducer', () => {
  it('should update the store data', () => {
    expect(
      order.Order(initState.order, {
        type: types.CREATE_ORDER_SUCCESS,
        payload: initState.order,
      }).error,
    ).toEqual(null);
  });
  it('should restore the store data', () => {
    expect(
      order.Order(initState.order, {
        type: types.USER_LOGOUT,
        payload: initState.order,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      order.Order(initState.order, {
        type: types.CREATE_ORDER_LOADING,
        payload: initState.order,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      order.Order(initState.order, {
        type: types.CREATE_ORDER_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
