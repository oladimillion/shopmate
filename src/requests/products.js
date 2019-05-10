import axios from "axios";
import API from "../api";

const basePath = `${API}/products`;

export const getProducts = (query) => {
  return axios.get(`${basePath}${query}`);
};

export const searchProducts = (query) => {
  return axios.get(`${basePath}/search${query}`);
};

export const getPopularProducts = (query) => {
  return getProducts(query);
};

export const getProductById = (id) => {
  return axios.get(`${basePath}/${id}`);
};

export const getProductsByCategory = ({query, category}) => {
  return axios.get(`${basePath}/inCategory/${category}/${query}`);
};

export const getProductsByDepartment = ({query, department}) => {
  return axios.get(`${basePath}/inDepartment/${department}/${query}`);
};

export const getProductReview = (id) => {
  return axios.get(`${basePath}/${id}/reviews`);
};

export const addProductReview = ({product_id, ...rest}) => {
  return axios.post(`${basePath}/${product_id}/reviews`, rest);
};

