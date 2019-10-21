import * as types from "../../actions/types";
import initState from "../initState"
import cart from "../cart";

describe("Cart reducer", () => {
  it("should update the store", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.GET_CART_SUCCESS,
        payload: initState.cart,
      }).error,
    ).toEqual(null);
  });
  it("should add item to the store", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.ADD_CART_SUCCESS,
        payload: initState.cart.data,
      }).isLoading,
    ).toEqual(false);
  });
  it("should update item in the store", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.UPDATE_CART_SUCCESS,
        payload: initState.cart.data,
      }).error,
    ).toEqual(null);
  });
  it("should restore the store", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.EMPTY_CART,
        payload: initState.cart,
      }).totalAmount,
    ).toEqual(0);
  });
  it("should update the store isLoading", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.GET_CART_LOADING,
        payload: initState.cart,
      }).isLoading,
    ).toEqual(true);
  });
  it("should update the store error", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.GET_CART_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
  it("should update the store totalAmount", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.GET_CART_AMOUNT_SUCCESS,
        payload: { total_amount: 20 },
      }).totalAmount,
    ).toEqual(20);
  });
  it("should remove item from the store", () => {
    expect(
      cart.Cart(initState.cart, {
        type: types.DELETE_CART_ITEM_SUCCESS,
        payload: {
          item_id: 1, price: 12, quantity: 1,
        },
      }).isLoading,
    ).toEqual(false);
  });
});
