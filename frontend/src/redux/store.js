import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";
// Here is where all the reducers will be stored
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

// Used to call async functions
const middleware = [thunk];

// Local stoage init state

// Check if we are able to find a cart value in our local storage, we want to add that to our cartItems value. Else, start with an empty array
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INTIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};
const store = createStore(
  reducer,
  INTIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
