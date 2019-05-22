import axios from "axios";
import fetch from "../utils/fetch";
import API, { stripeAPI } from "../api";

const basePath = `${API}/stripe/charge`;


/**
 * generate strike token endpoint
 *
 * @name genStripeToken 
 * @function
 * @param {object} payload 
 * @returns {promise}
 */
export const genStripeToken = (payload) => {
  return fetch.post(`${stripeAPI}`, payload);
};


/**
 * create stripe charge endpoint
 *
 * @name createStripeCharge 
 * @function
 * @param {object} payload 
 * @returns {promise}
 */
export const createStripeCharge = (payload) => {
  return axios.post(`${basePath}`, payload);
};

