import axios from "axios";
import API from "../api";

const basePath = `${API}/categories`;


/**
 * get categories endpoint
 *
 * @name  getCategories 
 * @function
 * @returns {promise}
 */
export const getCategories = () => {
  return axios.get(`${basePath}`);
};

