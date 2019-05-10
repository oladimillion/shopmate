import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";




export function* getCategoriesAsync(action) {
  yield put({ type: types.GET_CATEGORIES_LOADING });
  try {
    const { data } = yield call(requests.getCategories, action.payload);
    yield put({ type: types.GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_CATEGORIES_FAILURE, error: error.response.data });
  }
}

function* getCategoriesWatcher() {
  yield takeLatest(types.GET_CATEGORIES_REQUEST, getCategoriesAsync);
}

export default [
  getCategoriesWatcher,
];

