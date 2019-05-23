import axios from "axios";
import API from "../api";

const basePath = `${API}/products`;

/**
 * get product endpoint
 *
 * @name getProducts 
 * @function
 * @param {string} query 
 * * @returns {promise}
 */
export const getProducts = (query) => {
  return axios.get(`${basePath}${query}`);
};

/**
 * search product endpoint
 *
 * @name searchProducts 
 * @function
 * @param {string} query 
 * @returns {promise}
 */
export const searchProducts = (query) => {
  return axios.get(`${basePath}/search${query}`);
};

/**
 * get popular product endpoint
 *
 * @name getPopularProducts 
 * @function
 * @param {string} query 
 * @returns {promise}
 */
export const getPopularProducts = (query) => {
  return getProducts(query);
};

/**
 * get product by id endpoint
 *
 * @name getProductById 
 * @function
 * @param {number} id - product id
 * @returns {promise}
 */
export const getProductById = (id) => {
  return axios.get(`${basePath}/${id}`);
};

/**
 * get product by category endpoint
 *
 * @name getProductsByCategory 
 * @function
 * @param {object} query and category
 * @returns {promise}
 */
export const getProductsByCategory = ({query, category}) => {
  return axios.get(`${basePath}/inCategory/${category}/${query}`);
};

/**
 * get product by department endpoint
 *
 * @name getProductsByDepartment 
 * @function
 * @param {object} query and department
 * @returns {promise}
 */
export const getProductsByDepartment = ({query, department}) => {
  return axios.get(`${basePath}/inDepartment/${department}/${query}`);
};

/**
 * get product's review endpoint
 *
 * @name getProductReview 
 * @function
 * @param {number} id - product id
 * @returns {promise}
 */
export const getProductReview = (id) => {
  return axios.get(`${basePath}/${id}/reviews`);
};

/**
 * add review to a product endpoint
 *
 * @name  addCart
 * @function
 * @param {object} review and product id
 * @returns {promise}
 */
export const addProductReview = ({product_id, ...rest}) => {
  return axios.post(`${basePath}/${product_id}/reviews`, rest);
};

