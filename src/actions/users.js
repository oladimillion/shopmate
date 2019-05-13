import toastr from "../utils/toastr";
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
  toastr.success("Log out successful");
  return {
    type: types.USER_LOGOUT,
    payload: { 
      isAuth: false, 
      customer: {},
      message: "",
    },
  };
}

