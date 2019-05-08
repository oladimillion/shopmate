import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

import products from "./products";
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
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)


sagaMiddleware.run(rootSaga);

export default store;


