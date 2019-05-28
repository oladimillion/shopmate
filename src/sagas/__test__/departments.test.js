import * as departments from "../departments";
import * as types from "../../actions/types";

describe("Departments saga", () => {
  it("get departments", () => {
    const gen = departments.getDepartmentsAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_DEPARTMENTS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_DEPARTMENTS_FAILURE)
  });
 });


