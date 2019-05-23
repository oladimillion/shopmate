import { put, takeLatest, call } from "redux-saga/effects";
import toastr from "../utils/toastr";
import * as types from "../actions/types";
import * as requests from "../requests";
import connectivityCheck from "../utils/connectivityCheck";


/**
 * get products by department async
 *
 * @name  getProductsByDepartmentAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getProductsByDepartmentAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getProductsByDepartment, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_PRODUCTS_FAILURE));
  }
}

/**
 * get products by category async
 *
 * @name  getProductsByCategoryAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getProductsByCategoryAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getProductsByCategory, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_PRODUCTS_FAILURE));
  }
}

/**
 * get product by id async
 *
 * @name  getProductByIdAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getProductByIdAsync(action) {
  yield put({ type: types.GET_PRODUCT_BY_ID_LOADING });
  try {
    const { data } = yield call(requests.getProductById, action.payload);
    yield put({ type: types.GET_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_PRODUCT_BY_ID_FAILURE));
  }
}

/**
 * get product review async
 *
 * @name  getProductReviewAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getProductReviewAsync(action) {
  yield put({ type: types.GET_PRODUCT_REVIEW_LOADING });
  try {
    const { data } = yield call(requests.getProductReview, action.payload);
    yield put({ type: types.GET_PRODUCT_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_PRODUCT_REVIEW_FAILURE));
  }
}

/**
 * add review to product async
 *
 * @name  addProductReviewAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* addProductReviewAsync(action) {
  yield put({ type: types.ADD_PRODUCT_REVIEW_LOADING });
  try {
    const { data } = yield call(requests.addProductReview, action.payload);
    toastr.success("Review added");
    yield put({ type: types.ADD_PRODUCT_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.ADD_PRODUCT_REVIEW_FAILURE));
  }
}

/**
 * get products async
 *
 * @name  getProductsAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getProductsAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getProducts, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_PRODUCTS_FAILURE));
  }
}

/**
 * search product async
 *
 * @name  searchProductsAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* searchProductsAsync(action) {
  yield put({ type: types.GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.searchProducts, action.payload);
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_PRODUCTS_FAILURE));
  }
}

/**
 * get popular product async
 *
 * @name  getPopularProductsAsync 
 * @function
 * @param {object} action - type and payload
 */
export function* getPopularProductsAsync(action) {
  yield put({ type: types.GET_POPULAR_PRODUCTS_LOADING });
  try {
    const { data } = yield call(requests.getPopularProducts, action.payload);
    yield put({ type: types.GET_POPULAR_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    yield put(connectivityCheck(error, types.GET_POPULAR_PRODUCTS_FAILURE));
  }
}


/**
 * get products by department action watcher
 *
 * @name  getProductsByDepartmentWatcher 
 * @function
 */
function* getProductsByDepartmentWatcher() {
  yield takeLatest(types.GET_PRODUCTS_BY_DEPARTMENT_REQUEST, getProductsByDepartmentAsync);
}


/**
 * get products by category action watcher
 *
 * @name  getProductsByCategoryWatcher 
 * @function
 */
function* getProductsByCategoryWatcher() {
  yield takeLatest(types.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProductsByCategoryAsync);
}


/**
 * get products action watcher
 *
 * @name  getProductsWatcher 
 * @function
 */
function* getProductsWatcher() {
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsAsync);
}


/**
 * get products' review watcher
 *
 * @name  getProductReviewWatcher 
 * @function
 */
function* getProductReviewWatcher() {
  yield takeLatest(types.GET_PRODUCT_REVIEW_REQUEST, getProductReviewAsync);
}


/**
 * add product review action watcher
 *
 * @name  addProductReviewWatcher 
 * @function
 */
function* addProductReviewWatcher() {
  yield takeLatest(types.ADD_PRODUCT_REVIEW_REQUEST, addProductReviewAsync);
}


/**
 * get products by id action watcher
 *
 * @name  getProductByIdWatcher 
 * @function
 */
function* getProductByIdWatcher() {
  yield takeLatest(types.GET_PRODUCT_BY_ID_REQUEST, getProductByIdAsync);
}


/**
 * search products action watcher
 *
 * @name  searchProductsWatcher 
 * @function
 */
function* searchProductsWatcher() {
  yield takeLatest(types.SEARCH_PRODUCTS_REQUEST, searchProductsAsync);
}


/**
 * get popular products action watcher
 *
 * @name  getPopularProductsWatcher 
 * @function
 */
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

