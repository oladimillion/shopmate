import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";




/**
 * get departments async
 *
 * @name  getDepartmentsAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getDepartmentsAsync(action) {
  yield put({ type: types.GET_DEPARTMENTS_LOADING });
  try {
    const { data } = yield call(requests.getDepartments, action.payload);
    yield put({ type: types.GET_DEPARTMENTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_DEPARTMENTS_FAILURE));
  }
}

/**
 * get departments action watcher
 *
 * @name  getDepartmentsWatcher 
 * @function
 */
function* getDepartmentsWatcher() {
  yield takeLatest(types.GET_DEPARTMENTS_REQUEST, getDepartmentsAsync);
}

export default [
  getDepartmentsWatcher,
];

