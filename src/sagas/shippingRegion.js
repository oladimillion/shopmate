import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


export function* getShippingRegionAsync(action) {
  yield put({ type: types.GET_SHIPPING_REGION_LOADING });
  try {
    const { data } = yield call(requests.getShippingRegion, action.payload);
    yield put({ type: types.GET_SHIPPING_REGION_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_SHIPPING_REGION_FAILURE));
  }
}

function* getShippingRegionWatcher() {
  yield takeLatest(types.GET_SHIPPING_REGION_REQUEST, getShippingRegionAsync);
}

export default [
  getShippingRegionWatcher,
];

