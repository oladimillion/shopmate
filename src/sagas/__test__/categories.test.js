import * as categories from "../categories";
import * as types from "../../actions/types";

describe("Categories saga", () => {
  it("get categories", () => {
    const gen = categories.getCategoriesAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_CATEGORIES_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_CATEGORIES_FAILURE)
  });
 });


