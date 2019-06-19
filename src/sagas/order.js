import { put, takeLatest, call, all } from "redux-saga/effects";
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
    yield put(connectivityCheck(error, types.CREATE_ORDER_FAILURE));
  }
}

/**
 * get order items async
 *
 * @name getOrderItemsAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getOrderItemsAsync(action) {
  yield put({ type: types.GET_ORDER_ITEMS_LOADING });
  try {
    const { data: orders } = yield call(requests.getCustomerOrder, action.payload);
    const response = yield all(orders.map(data => call(requests.getOrderById, data)));
    const data = response.reduce((accum, { data }) => {
      return [...accum, ...data];
    }, []);
    yield put({ type: types.GET_ORDER_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_ORDER_ITEMS_FAILURE));
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

/**
 * get order items action watcher
 *
 * @name  getOrderItemsWatcher 
 * @function
 */
function* getOrderItemsWatcher() {
  yield takeLatest(types.GET_ORDER_ITEMS_REQUEST, getOrderItemsAsync);
}

export default [
  createOrderWatcher,
  getOrderItemsWatcher,
];

