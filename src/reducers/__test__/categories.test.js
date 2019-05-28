import * as types from "../../actions/types";
import initState from "../initState"
import categories from "../categories";

describe('Categories reducer', () => {
  it('should update to the store data', () => {
    expect(
      categories.Categories(initState.categories, {
        type: types.GET_CATEGORIES_SUCCESS,
        payload: initState.categories,
      }).count,
    ).toEqual(0);
  });
  it('should update the store isLoading', () => {
    expect(
      categories.Categories(initState.categories, {
        type: types.GET_CATEGORIES_LOADING,
        payload: initState.categories,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      categories.Categories(initState.categories, {
        type: types.GET_CATEGORIES_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
