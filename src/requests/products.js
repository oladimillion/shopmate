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
}
