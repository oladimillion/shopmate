import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from "axios";
import queryString from "query-string";

import rootSaga from '../sagas';
import * as types from "../actions/types";
import setAuthToken from "../utils/setAuthToken";
import saveUserData from "../utils/saveUserData";

import products from "./products";
import departments from "./departments";
import categories from "./categories";
import users from "./users";
import order from "./order";
import cart from "./cart";
import tax from "./tax";
import shippingRegion from "./shippingRegion";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
import ViewCartModal from "./viewCartModal";



const sagaMiddleware = createSagaMiddleware();

let composeEnhancers;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}


const rootReducer = combineReducers({
  LoginModal,
  RegisterModal,
  ViewCartModal,
  ...products,
  ...departments,
  ...categories,
  ...users,
  ...cart,
  ...shippingRegion,
  ...order,
  ...tax,
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

const customer = JSON.parse(localStorage.getItem("customer"));
const { accessToken } = queryString.parse(document.cookie);

if(accessToken && customer) {
  store.dispatch({ 
    type: types.USER_SUCCESS, 
    payload: { customer },
  });
  setAuthToken({accessToken});
} else {
  setAuthToken({});
  saveUserData({});
}

axios.interceptors.response.use(response => {
  return response;
}, error => {
  throw error;
});


sagaMiddleware.run(rootSaga);

export default store;


