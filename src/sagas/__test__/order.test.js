import * as order from "../order";
import * as types from "../../actions/types";

describe("Order saga", () => {
  it("create order", () => {
    const gen = order.createOrderAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.CREATE_ORDER_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.CREATE_ORDER_FAILURE)
  });
  it("get order items", () => {
    const gen = order.getOrderItemsAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_ORDER_ITEMS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_ORDER_ITEMS_FAILURE)
  });
  it("get order by id", () => {
    const gen = order.getOrderByIdAsync({ order_id:  1 });
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_ORDER_BY_ID_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_ORDER_BY_ID_FAILURE)
  });
});


