import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";




export function* getProductsAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getProducts, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE, error: error.response.data });
  }
}

export function* searchProductsAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.searchProducts, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE, error: error.response.data });
  }
}

export function* getPopularProductsAsync(action) {
  yield put({ type: types.GET_POPULAR_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getPopularProducts, action.payload);
    yield put({ type: types.GET_POPULAR_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_POPULAR_PRODUCTS_FAILURE, error: error.response.data });
  }
}

function* getProductsWatcher() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsAsync);
}

function* searchProductsWatcher() {
  yield takeLatest(types.SEARCH_PRODUCTS_REQUEST, searchProductsAsync);
}

function* getPopularProductsWatcher() {
  yield takeLatest(types.GET_POPULAR_PRODUCTS_REQUEST, getPopularProductsAsync);
}


export default [
  getProductsWatcher,
  getPopularProductsWatcher,
  searchProductsWatcher,
];

