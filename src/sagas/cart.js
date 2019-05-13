import { put, takeLatest, call } from "redux-saga/effects";
import toastr from "../utils/toastr";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


export function* addCartAsync(action) {
  yield put({ type: types.ADD_CART_LOADING });
  try {
    const { data } = yield call(requests.addCart, action.payload);
    toastr.success("Item successfully added");
    yield put({ type: types.ADD_CART_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.ADD_CART_FAILURE));
  }
}

export function* getCartAsync(action) {
  yield put({ type: types.GET_CART_LOADING });
  try {
    const { data } = yield call(requests.getCart, action.payload);
    yield put({ type: types.GET_CART_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_CART_FAILURE));
  }
}

export function* getCartAmountAsync(action) {
  yield put({ type: types.GET_CART_AMOUNT_LOADING });
  try {
    const { data } = yield call(requests.getCartAmount, action.payload);
    yield put({ type: types.GET_CART_AMOUNT_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_CART_AMOUNT_FAILURE));
  }
}

export function* updateCartAsync(action) {
  yield put({ type: types.UPDATE_CART_LOADING });
  try {
    const { data } = yield call(requests.updateCart, action.payload);
    toastr.success("Cart updated successfully");
    yield put({ type: types.UPDATE_CART_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.UPDATE_CART_FAILURE));
  }
}

export function* deleteCartItemAsync(action) {
  yield put({ type: types.DELETE_CART_ITEM_LOADING });
  try {
    yield call(requests.deleteCartItem, action.payload);
    toastr.success("Item successfully removed");
    yield put({ type: types.DELETE_CART_ITEM_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put(connectivityCheck(error, types.DELETE_CART_ITEM_FAILURE));
  }
}


function* getCartWatcher() {
  yield takeLatest(types.GET_CART_REQUEST, getCartAsync);
}

function* getCartAmountWatcher() {
  yield takeLatest(types.GET_CART_AMOUNT_REQUEST, getCartAmountAsync);
}

function* updateCartWatcher() {
  yield takeLatest(types.UPDATE_CART_REQUEST, updateCartAsync);
}

function* addCartWatcher() {
  yield takeLatest(types.ADD_CART_REQUEST, addCartAsync);
}

function* deleteCartItemWatcher() {
  yield takeLatest(types.DELETE_CART_ITEM_REQUEST, deleteCartItemAsync);
}

export default [
  getCartWatcher,
  getCartAmountWatcher,
  updateCartWatcher,
  addCartWatcher,
  deleteCartItemWatcher,
];

