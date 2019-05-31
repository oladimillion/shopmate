import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


/**
 * create order async
 *
 * @name  createOrderAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* createOrderAsync(action) {
  yield put({ type: types.CREATE_ORDER_LOADING });
  try {
    const { data } = yield call(requests.createOrder, action.payload);
    yield put({ type: types.CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
  console.log(error)
    yield put(connectivityCheck(error, types.CREATE_ORDER_FAILURE));
  }
}

/**
 * create order action watcher
 *
 * @name  createOrderWatcher 
 * @function
 */
function* createOrderWatcher() {
  yield takeLatest(types.CREATE_ORDER_REQUEST, createOrderAsync);
}

export default [
  createOrderWatcher,
];

