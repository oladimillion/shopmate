import axios from "axios";
import API from "../api";

const basePath = `${API}/shipping/regions`;

export const getShippingRegion = () => {
  return axios.get(`${basePath}`);
};

export const getShippingRegionById = (payload) => {
  return axios.get(`${basePath}/${payload.shipping_region_id}`);
};

