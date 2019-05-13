import { put, takeLatest, call } from "redux-saga/effects";
import toastr from "../utils/toastr";
import * as types from "../actions/types";
import * as requests from "../requests";
import setAuthDetail from "../utils/setAuthDetail";
import connectivityCheck from "../utils/connectivityCheck";



export function* loginAsync(action) {
  yield put({ type: types.USER_LOADING });
  try {
    const { data } = yield call(requests.login, action.payload);
    const { customer } = data;
    setAuthDetail(data);
    toastr.success(`Welcome ${customer.name}!`);
    yield put({ 
      type: types.USER_SUCCESS, 
      payload: {customer, message: "Login successful!"},
    });
  } catch (error) {
    yield put(connectivityCheck(error, types.USER_FAILURE));
  }
}

export function* signupAsync(action) {
  yield put({ type: types.USER_LOADING });
  try {
    const { data } = yield call(requests.signup, action.payload);
    const { customer } = data;
    setAuthDetail(data);
    toastr.success("Registration successful");
    yield put({ 
      type: types.USER_SUCCESS, 
      payload: {customer, message: "Registration successful!"},
    });
  } catch (error) {
    yield put(connectivityCheck(error, types.USER_FAILURE));
  }
}

function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginAsync);
}

function* signupWatcher() {
  yield takeLatest(types.SIGNUP_REQUEST, signupAsync);
}

export default [
  loginWatcher,
  signupWatcher,
];

