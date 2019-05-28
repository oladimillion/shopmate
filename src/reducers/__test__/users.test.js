import * as types from "../../actions/types";
import initState from "../initState"
import users from "../users";

describe('User reducer', () => {
  it('should update to the store data', () => {
    expect(
      users.User(initState.user, {
        type: types.USER_SUCCESS,
        payload: initState.user,
      }).error,
    ).toEqual(null);
  });
  it('should restore the store', () => {
    expect(
      users.User(initState.user, {
        type: types.USER_LOGOUT,
        payload: initState.user,
      }).isLoading,
    ).toEqual(false);
  });
  it('should update the store isLoading', () => {
    expect(
      users.User(initState.user, {
        type: types.USER_LOADING,
        payload: initState.user,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      users.User(initState.user, {
        type: types.USER_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
