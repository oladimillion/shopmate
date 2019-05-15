import toastr from "../utils/toastr";
import * as types from './types';
import setAuthToken from "../utils/setAuthToken";
import saveUserData from "../utils/saveUserData";

export const login = (payload) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

export const signup = (payload) => ({
  type: types.SIGNUP_REQUEST,
  payload,
});

export const getUser = (payload) => ({
  type: types.USER_REQUEST,
  payload,
});

export const profile = (payload) => ({
  type: types.PROFILE_REQUEST,
  payload,
});

export const address = (payload) => ({
  type: types.ADDRESS_REQUEST,
  payload,
});


export const logout = () => {
  setAuthToken({});
  saveUserData({});
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

