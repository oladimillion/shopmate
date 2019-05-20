import axios from "axios";
import fetch from "../utils/fetch";
import API, { stripeAPI } from "../api";

const basePath = `${API}/stripe/charge`;

export const genStripeToken = (payload) => {
  return fetch.post(`${stripeAPI}`, payload);
};

export const createStripeCharge = (payload) => {
  return axios.post(`${basePath}`, payload);
};

