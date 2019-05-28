import * as cart from "../cart";
import * as types from "../../actions/types";

describe("Cart saga", () => {
  it("add cart", () => {
    const gen = cart.addCartAsync({})
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.ADD_CART_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.ADD_CART_FAILURE)
  });
  it("get cart", () => {
    const gen = cart.getCartAsync({})
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_CART_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_CART_FAILURE)
  });
  it("get cart amount", () => {
    const gen = cart.getCartAmountAsync({})
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_CART_AMOUNT_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_CART_AMOUNT_FAILURE)
  });
  it("update cart", () => {
    const gen = cart.updateCartAsync({})
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.UPDATE_CART_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.UPDATE_CART_FAILURE)
  });
  it("delete cart item", () => {
    const gen = cart.deleteCartItemAsync({})
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.DELETE_CART_ITEM_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.DELETE_CART_ITEM_FAILURE)
  });
});


