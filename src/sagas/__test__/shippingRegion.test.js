import * as shippingRegion from "../shippingRegion";
import * as types from "../../actions/types";

describe("ShippingRegion saga", () => {
  it("get shipping region", () => {
    const gen = shippingRegion.getShippingRegionAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_SHIPPING_REGION_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_SHIPPING_REGION_FAILURE)
  });
  it("get shipping region by id", () => {
    const gen = shippingRegion.getShippingRegionByIdAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_SHIPPING_REGION_BY_ID_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_SHIPPING_REGION_BY_ID_FAILURE)
  });
});



