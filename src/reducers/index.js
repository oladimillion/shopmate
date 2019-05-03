import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
import ViewCartModal from "./viewCartModal";



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
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware())
)


export default store;


