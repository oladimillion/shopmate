import * as tax from "../tax";
import * as types from "../../actions/types";

describe("Tax saga", () => {
  it("get tax", () => {
    const gen = tax.getTaxAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_TAX_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_TAX_FAILURE)
  });
});


