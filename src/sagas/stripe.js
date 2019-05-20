import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";


export function* genStripeTokenAsync(action) {
  yield put({ type: types.GEN_STRIPE_TOKEN_LOADING });
  try {
    const data = yield call(requests.genStripeToken, action.payload);
    yield put({ type: types.GEN_STRIPE_TOKEN_SUCCESS, payload: data });
  } catch (error) {
    yield put({type: types.GEN_STRIPE_TOKEN_FAILURE, payload: error });
  }
}

export function* createStripeChargeAsync(action) {
  yield put({ type: types.CREATE_STRIPE_CHARGE_LOADING });
  try {
    const data = yield call(requests.createStripeCharge, action.payload);
    yield put({ type: types.CREATE_STRIPE_CHARGE_SUCCESS, payload: data });
  } catch (error) {
    yield put({type: types.CREATE_STRIPE_CHARGE_FAILURE, payload: error });
  }
}

function* genStripeTokenWatcher() {
  yield takeLatest(types.GEN_STRIPE_TOKEN_REQUEST, genStripeTokenAsync);
}

function* createStripeChargeWatcher() {
  yield takeLatest(types.CREATE_STRIPE_CHARGE_REQUEST, createStripeChargeAsync);
}

export default [
  genStripeTokenWatcher,
  createStripeChargeWatcher,
];

