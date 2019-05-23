import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


/**
 * get shipping region async
 *
 * @name  getShippingRegionAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getShippingRegionAsync(action) {
  yield put({ type: types.GET_SHIPPING_REGION_LOADING });
  try {
    const { data } = yield call(requests.getShippingRegion, action.payload);
    yield put({ type: types.GET_SHIPPING_REGION_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_SHIPPING_REGION_FAILURE));
  }
}

/**
 * get shipping region by id async
 *
 * @name  getShippingRegionByIdAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getShippingRegionByIdAsync(action) {
  yield put({ type: types.GET_SHIPPING_REGION_BY_ID_LOADING });
  try {
    const { data } = yield call(requests.getShippingRegionById, action.payload);
    yield put({ type: types.GET_SHIPPING_REGION_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_SHIPPING_REGION_BY_ID_FAILURE));
  }
}

/**
 * get shipping region action watcher
 *
 * @name  getShippingRegionWatcher 
 * @function
 */
function* getShippingRegionWatcher() {
  yield takeLatest(types.GET_SHIPPING_REGION_REQUEST, getShippingRegionAsync);
}

/**
 * get shipping region by id action watcher
 *
 * @name  getShippingRegionByIdWatcher 
 * @function
 */
function* getShippingRegionByIdWatcher() {
  yield takeLatest(types.GET_SHIPPING_REGION_BY_ID_REQUEST, getShippingRegionByIdAsync);
}

export default [
  getShippingRegionWatcher,
  getShippingRegionByIdWatcher,
];

