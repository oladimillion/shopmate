import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";




export function* getDepartmentsAsync(action) {
  yield put({ type: types.GET_DEPARTMENTS_LOADING });
  try {
    const { data } = yield call(requests.getDepartments, action.payload);
    yield put({ type: types.GET_DEPARTMENTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_DEPARTMENTS_FAILURE));
  }
}

function* getDepartmentsWatcher() {
  yield takeLatest(types.GET_DEPARTMENTS_REQUEST, getDepartmentsAsync);
}

export default [
  getDepartmentsWatcher,
];

