import { put, takeLatest, call } from "redux-saga/effects";
import toastr from "../utils/toastr";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


/**
 *  add item to cart async
 *
 * @name addCartAsync
 * @function
 * @param {object} action - type and payload
 */
export function* addCartAsync(action) {
  yield put({ type: types.ADD_CART_LOADING });
  try {
    const { data } = yield call(requests.addCart, action.payload);
    toastr.success("Item added to cart");
    yield put({ type: types.ADD_CART_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.ADD_CART_FAILURE));
  }
}

/**
 * get cart async
 *
 * @name getCartAsync
 * @function
 * @param {object} action - type and payload
 */
export function* getCartAsync(action) {
  yield put({ type: types.GET_CART_LOADING });
  try {
    const { data } = yield call(requests.getCart, action.payload);
    yield put({ type: types.GET_CART_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_CART_FAILURE));
  }
}

/**
 * get cart total amount async
 *
 * @name getCartAmountAsync
 * @function
 * @param {object} action -type and payload
 */
export function* getCartAmountAsync(action) {
  yield put({ type: types.GET_CART_AMOUNT_LOADING });
  try {
    const { data } = yield call(requests.getCartAmount, action.payload);
    yield put({ type: types.GET_CART_AMOUNT_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_CART_AMOUNT_FAILURE));
  }
}

/**
 * update cart async
 *
 * @name updateCartAsync
 * @function
 * @param {object} action - type and payload
 */
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

/**
 * delete cart item async
 *
 * @name deleteCartItemAsync
 * @function
 * @param {object} action - type and payload
 */
export function* deleteCartItemAsync(action) {
  yield put({ type: types.DELETE_CART_ITEM_LOADING });
  try {
    let { data } = yield call(requests.deleteCartItem, action.payload);
    toastr.success("Item successfully removed");
    data = action.payload
    yield put({ 
      type: types.DELETE_CART_ITEM_SUCCESS, 
      payload: data,
    });
  } catch (error) {
    yield put(connectivityCheck(error, types.DELETE_CART_ITEM_FAILURE));
  }
}


/**
 * get cart action watcher
 *
 * @name getCartWatcher
 * @function
 */
function* getCartWatcher() {
  yield takeLatest(types.GET_CART_REQUEST, getCartAsync);
}


/**
 * get cart total amount action watcher
 *
 * @name getCartAmountWatcher
 * @function
 */
function* getCartAmountWatcher() {
  yield takeLatest(types.GET_CART_AMOUNT_REQUEST, getCartAmountAsync);
}


/**
 * update cart action watcher
 *
 * @name updateCartWatcher 
 * @function
 */
function* updateCartWatcher() {
  yield takeLatest(types.UPDATE_CART_REQUEST, updateCartAsync);
}


/**
 * add item to cart action watcher
 *
 * @name addCartWatcher 
 * @function
 */
function* addCartWatcher() {
  yield takeLatest(types.ADD_CART_REQUEST, addCartAsync);
}


/**
 * delete cart item action watcher
 *
 * @name deleteCartItemWatcher 
 * @function
 */
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

