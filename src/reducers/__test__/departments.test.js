import * as types from "../../actions/types";
import initState from "../initState"
import departments from "../departments";

describe('Departments reducer', () => {
  it('should update to the store data', () => {
    expect(
      departments.Departments(initState.departments, {
        type: types.GET_DEPARTMENTS_SUCCESS,
        payload: initState.departments,
      }).count,
    ).toEqual(0);
  });
  it('should update the store isLoading', () => {
    expect(
      departments.Departments(initState.departments, {
        type: types.GET_DEPARTMENTS_LOADING,
        payload: initState.departments,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      departments.Departments(initState.departments, {
        type: types.GET_DEPARTMENTS_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
