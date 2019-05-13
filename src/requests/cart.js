import axios from "axios";
import API from "../api";

const basePath = `${API}/shoppingcart`;

export const addCart = (payload) => {
  return axios.post(`${basePath}/add`, payload);
};

export const getCart = (payload) => {
  return axios.get(`${basePath}/${payload.cartId}`);
};

export const getCartAmount = (payload) => {
  return axios.get(`${basePath}/totalAmount/${payload.cartId}`);
};

export const updateCart = (payload) => {
  return axios.put(`${basePath}/update/${payload.item_id}`, payload);
};

export const deleteCartItem = (payload) => {
  return axios.delete(`${basePath}/removeProduct/${payload.item_id}`);
};

