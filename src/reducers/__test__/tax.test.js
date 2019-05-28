import * as types from "../../actions/types";
import initState from "../initState"
import tax from "../tax";

describe('Tax reducer', () => {
  it('should update to the store data', () => {
    expect(
      tax.Tax(initState.tax, {
        type: types.GET_TAX_SUCCESS,
        payload: initState.tax,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      tax.Tax(initState.tax, {
        type: types.GET_TAX_LOADING,
        payload: initState.tax,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      tax.Tax(initState.tax, {
        type: types.GET_TAX_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});


