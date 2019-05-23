import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


/**
 * get tax async
 *
 * @name  getTaxAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getTaxAsync(action) {
  yield put({ type: types.GET_TAX_LOADING });
  try {
    const { data } = yield call(requests.getTax, action.payload);
    yield put({ type: types.GET_TAX_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_TAX_FAILURE));
  }
}

/**
 * get taxt action watcher
 *
 * @name  getTaxWatcher 
 * @function
 */
function* getTaxWatcher() {
  yield takeLatest(types.GET_TAX_REQUEST, getTaxAsync);
}

export default [
  getTaxWatcher,
];

