import axios from "axios";
import API from "../api";

const basePath = `${API}/shipping/regions`;

export const getShippingRegion = () => {
  return axios.get(`${basePath}`);
};

