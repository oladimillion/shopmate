import axios from "axios";
import API from "../api";

const basePath = `${API}/shipping/regions`;

/**
 * get shipping region endpoint
 *
 * @name getShippingRegion
 * @function
 * @returns {promise}
 */
export const getShippingRegion = () => {
  return axios.get(`${basePath}`);
};

/**
 * get shipping region by id endpoint
 *
 * @name getShippingRegionById
 * @function
 * @param {object} payload - shippion region id
 * @returns {promise}
 */
export const getShippingRegionById = (payload) => {
  return axios.get(`${basePath}/${payload.shipping_region_id}`);
};

