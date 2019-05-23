import * as types from './types';


/**
 * get products request action
 *
 * @name getProducts
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getProducts = (payload) => ({
  type: types.GET_PRODUCTS_REQUEST,
  payload,
});


/**
 * get products by id request action
 *
 * @name getProductById
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getProductById = (payload) => ({
  type: types.GET_PRODUCT_BY_ID_REQUEST,
  payload,
});


/**
 * search products request action
 *
 * @name searchProducts
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const searchProducts = (payload) => ({
  type: types.SEARCH_PRODUCTS_REQUEST,
  payload,
});


/**
 * get products by department request action
 *
 * @name getProductsByDepartment
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getProductsByDepartment = (payload) => ({
  type: types.GET_PRODUCTS_BY_DEPARTMENT_REQUEST,
  payload,
});


/**
 * get products by category request action
 *
 * @name getProductsByCategory
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getProductsByCategory = (payload) => ({
  type: types.GET_PRODUCTS_BY_CATEGORY_REQUEST,
  payload,
});


/**
 * get product review request action
 *
 * @name getProductReview
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getProductReview = (payload) => ({
  type: types.GET_PRODUCT_REVIEW_REQUEST,
  payload,
});


/**
 * add product review request action
 *
 * @name addProductReview
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const addProductReview = (payload) => ({
  type: types.ADD_PRODUCT_REVIEW_REQUEST,
  payload,
});


/**
 * get popular products request action
 *
 * @name getPopularProducts
 * @function
 * @param {object} payload
 * @returns {object} type and payload
 */
export const getPopularProducts = (payload) => ({
  type: types.GET_POPULAR_PRODUCTS_REQUEST,
  payload,
});
