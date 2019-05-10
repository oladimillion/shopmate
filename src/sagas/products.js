import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actions/types";
import * as requests from "../requests";




export function* getProductsByDepartmentAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getProductsByDepartment, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE, error: error.response.data });
  }
}

export function* getProductsByCategoryAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getProductsByCategory, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE, error: error.response.data });
  }
}

export function* getProductByIdAsync(action) {
  yield put({ type: types.GET_PRODUCT_BY_ID_LOADING });
  try {
    const { data } = yield call(requests.getProductById, action.payload);
    yield put({ type: types.GET_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_BY_ID_FAILURE, error: error.response.data });
  }
}

export function* getProductReviewAsync(action) {
  yield put({ type: types.GET_PRODUCT_REVIEW_LOADING });
  try {
    const { data } = yield call(requests.getProductReview, action.payload);
    yield put({ type: types.GET_PRODUCT_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_REVIEW_FAILURE, error: error.response.data });
  }
}

export function* addProductReviewAsync(action) {
  yield put({ type: types.ADD_PRODUCT_REVIEW_LOADING });
  try {
    const { data } = yield call(requests.addProductReview, action.payload);
    yield put({ type: types.ADD_PRODUCT_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: types.ADD_PRODUCT_REVIEW_FAILURE, error: error.response.data });
  }
}

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

function* getProductsByDepartmentWatcher() {
  yield takeLatest(types.GET_PRODUCTS_BY_DEPARTMENT_REQUEST, getProductsByDepartmentAsync);
}

function* getProductsByCategoryWatcher() {
  yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProductsByCategoryAsync);
}

function* getProductsWatcher() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsAsync);
}

function* getProductReviewWatcher() {
  yield takeLatest(types.GET_PRODUCT_REVIEW_REQUEST, getProductReviewAsync);
}

function* addProductReviewWatcher() {
  yield takeLatest(types.ADD_PRODUCT_REVIEW_REQUEST, addProductReviewAsync);
}

function* getProductByIdWatcher() {
  yield takeLatest(types.GET_PRODUCT_BY_ID_REQUEST, getProductByIdAsync);
}

function* searchProductsWatcher() {
  yield takeLatest(types.SEARCH_PRODUCTS_REQUEST, searchProductsAsync);
}

function* getPopularProductsWatcher() {
  yield takeLatest(types.GET_POPULAR_PRODUCTS_REQUEST, getPopularProductsAsync);
}


export default [
  addProductReviewWatcher,
  getProductsWatcher,
  getProductByIdWatcher,
  getPopularProductsWatcher,
  getProductReviewWatcher,
  searchProductsWatcher,
  getProductsByDepartmentWatcher,
  getProductsByCategoryWatcher,
];

