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
});


