import { put, takeLatest, call } from "redux-saga/effects";
import toastr from "../utils/toastr";
import * as types from "../actions/types";
import * as requests from "../requests";
import saveUserData from "../utils/saveUserData";
import setAuthToken from "../utils/setAuthToken";
import connectivityCheck from "../utils/connectivityCheck";



export function* getUserAsync(action) {
  yield put({ type: types.USER_LOADING });
  try {
    const { data } = yield call(requests.getUser, action.payload);
    saveUserData({ customer: data });
    yield put({ 
      type: types.USER_SUCCESS, 
      payload: {customer: data, message: ""},
    });
  } catch (error) {
    yield put(connectivityCheck(error, types.USER_FAILURE));
  }
}

export function* profileAsync(action) {
  yield put({ type: types.USER_LOADING });
  try {
    const { data } = yield call(requests.profile, action.payload);
    saveUserData({ customer: data });
    toastr.success("Profile updated successfully");
    yield put({ 
      type: types.USER_SUCCESS, 
      payload: {customer: data, message: "Info updated successfully!"},
    });
  } catch (error) {
    toastr.error("Profile couldn't be updated");
    yield put(connectivityCheck(error, types.USER_FAILURE));
  }
}

export function* addressAsync(action) {
  yield put({ type: types.USER_LOADING });
  try {
    const { data } = yield call(requests.address, action.payload);
    saveUserData({ customer: data });
    toastr.success("Address updated successfully");
    yield put({ 
      type: types.USER_SUCCESS, 
      payload: {customer: data, message: "Info updated successfully!"},
    });
  } catch (error) {
    toastr.error("Address couldn't be updated");
    yield put(connectivityCheck(error, types.USER_FAILURE));
  }
}

export function* loginAsync(action) {
  yield put({ type: types.USER_LOADING });
  try {
    const { data } = yield call(requests.login, action.payload);
    const { customer } = data;
    setAuthToken(data);
    saveUserData(data);
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
    setAuthToken(data);
    saveUserData(data);
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

function* getUserWatcher() {
  yield takeLatest(types.USER_REQUEST, getUserAsync);
}

function* profileWatcher() {
  yield takeLatest(types.PROFILE_REQUEST, profileAsync);
}

function* addressWatcher() {
  yield takeLatest(types.ADDRESS_REQUEST, addressAsync);
}

export default [
  loginWatcher,
  signupWatcher,
  getUserWatcher,
  addressWatcher,
  profileWatcher,
];

