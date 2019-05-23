import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


/**
 * get categories async
 *
 * @name getCategoriesAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getCategoriesAsync(action) {
  yield put({ type: types.GET_CATEGORIES_LOADING });
  try {
    const { data } = yield call(requests.getCategories, action.payload);
    yield put({ type: types.GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_CATEGORIES_FAILURE));
  }
}


/**
 * get categories action watcher
 *
 * @name  getCategoriesWatcher 
 * @function
 */
function* getCategoriesWatcher() {
  yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategoriesAsync);
}

export default [
  getCategoriesWatcher,
];

