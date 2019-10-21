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

describe('OrderItems reducer', () => {
  it('should update the store data', () => {
    expect(
      order.OrderItems(initState.orderItems, {
        type: types.GET_ORDER_ITEMS_SUCCESS,
        payload: initState.orderItems,
      }).error,
    ).toEqual(null);
  });
  it('should restore the store data', () => {
    expect(
      order.OrderItems(initState.orderItems, {
        type: types.USER_LOGOUT,
        payload: initState.orderItems,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      order.OrderItems(initState.orderItems, {
        type: types.GET_ORDER_ITEMS_LOADING,
        payload: initState.orderItems,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      order.OrderItems(initState.orderItems, {
        type: types.GET_ORDER_ITEMS_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});

describe('OrderById reducer', () => {
  it('should update the store data', () => {
    expect(
      order.OrderById(initState.orderById, {
        type: types.GET_ORDER_BY_ID_SUCCESS,
        payload: initState.orderById,
      }).error,
    ).toEqual(null);
  });
  it('should restore the store data', () => {
    expect(
      order.OrderById(initState.orderById, {
        type: types.USER_LOGOUT,
        payload: initState.orderById,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      order.OrderById(initState.orderById, {
        type: types.GET_ORDER_BY_ID_LOADING,
        payload: initState.orderById,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      order.OrderById(initState.orderById, {
        type: types.GET_ORDER_BY_ID_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
