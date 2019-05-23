import toastr from "../utils/toastr";
import * as types from './types';
import setAuthToken from "../utils/setAuthToken";
import saveUserData from "../utils/saveUserData";

/**
 * login request action
 *
 * @name login
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const login = (payload) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

/**
 * signup request action
 *
 * @name signup
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const signup = (payload) => ({
  type: types.SIGNUP_REQUEST,
  payload,
});

/**
 * get user request action
 *
 * @name getUser
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getUser = (payload) => ({
  type: types.USER_REQUEST,
  payload,
});

/**
 * profile request action
 *
 * @name profile
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const profile = (payload) => ({
  type: types.PROFILE_REQUEST,
  payload,
});

/**
 * address request action
 *
 * @name address
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const address = (payload) => ({
  type: types.ADDRESS_REQUEST,
  payload,
});


/**
 * logs user out of the application
 *
 * @name logout
 * @function
 * @returns {object} action - type and payload
 */
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

