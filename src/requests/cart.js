import axios from "axios";
import API from "../api";

const basePath = `${API}/shoppingcart`;

/**
 * add item to cart endpoint
 *
 * @name addCart
 * @function
 * @param {object} payload - item detail
 * @returns {promise}
 */
export const addCart = (payload) => {
  return axios.post(`${basePath}/add`, payload);
};


/**
 * get cart endpoint
 *
 * @name getCart 
 * @function
 * @param {object} payload - item detail
 * @returns {promise}
 */
export const getCart = (payload) => {
  return axios.get(`${basePath}/${payload.cartID}`);
};

/**
 * generate cart id endpoint
 *
 * @name genCartID
 * @function
 * @param {object} payload - item detail
 * @returns {promise}
 */
export const genCartID = (payload) => {
  return axios.get(`${basePath}/generateUniqueId`);
};


/**
 * get cart total amount endpoint
 *
 * @name  getCartAmount 
 * @function
 * @param {object} payload - cart info
 * @returns {promise}
 */
export const getCartAmount = (payload) => {
  return axios.get(`${basePath}/totalAmount/${payload.cartID}`);
};


/**
 * update cart item endpoint
 *
 * @name  updateCart 
 * @function
 * @param {object} payload - item detail
 * @returns {promise}
 */
export const updateCart = (payload) => {
  return axios.put(`${basePath}/update/${payload.item_id}`, payload);
};


/**
 * remove item from cart endpoint
 *
 * @name deleteCartItem 
 * @function
 * @param {object} payload - item detail
 * @returns {promise}
 */
export const deleteCartItem = (payload) => {
  return axios.delete(`${basePath}/removeProduct/${payload.item_id}`);
};

