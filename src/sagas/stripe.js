import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";


/**
 * generate stripe token async
 *
 * @name  genStripeTokenAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* genStripeTokenAsync(action) {
  yield put({ type: types.GEN_STRIPE_TOKEN_LOADING });
  try {
    const data = yield call(requests.genStripeToken, action.payload);
    if(!data) throw new Error("Error occured");
    else {
      yield put({ type: types.GEN_STRIPE_TOKEN_SUCCESS, payload: data });
    }
  } catch (error) {
    yield put({type: types.GEN_STRIPE_TOKEN_FAILURE, payload: error });
  }
}

/**
 * create stripe charge async
 *
 * @name  createStripeChargeAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* createStripeChargeAsync(action) {
  yield put({ type: types.CREATE_STRIPE_CHARGE_LOADING });
  try {
    const data = yield call(requests.createStripeCharge, action.payload);
    if(!data) throw new Error("Error occured");
    else {
      yield put({ type: types.CREATE_STRIPE_CHARGE_SUCCESS, payload: data });
    }
  } catch (error) {
    yield put({type: types.CREATE_STRIPE_CHARGE_FAILURE, payload: error });
  }
}

/**
 * generate stripe token action watcher
 *
 * @name  genStripeTokenWatcher 
 * @function
 */
function* genStripeTokenWatcher() {
  yield takeLatest(types.GEN_STRIPE_TOKEN_REQUEST, genStripeTokenAsync);
}

/**
 * create stipe charge action watcher
 *
 * @name  createStripeChargeWatcher 
 * @function
 */
function* createStripeChargeWatcher() {
  yield takeLatest(types.CREATE_STRIPE_CHARGE_REQUEST, createStripeChargeAsync);
}

export default [
  genStripeTokenWatcher,
  createStripeChargeWatcher,
];

