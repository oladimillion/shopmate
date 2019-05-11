import * as types from './types';
import setAuthDetail from "../utils/setAuthDetail";

export const login = (payload) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

export const signup = (payload) => ({
  type: types.SIGNUP_REQUEST,
  payload,
});

export const logout = () => {
  setAuthDetail({});
  return {
    type: types.USER_SUCCESS,
    payload: {},
    message: "You are logged out successfully",
  };
}

