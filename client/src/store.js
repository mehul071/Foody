import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzareducers";
import { cartReducer } from "./reducers/cartreducers";
import { registerUserReducer } from "./reducers/Userreducers";
import { loginUserReducer } from "./reducers/loginreducer";
import { createorderReducer } from "./reducers/createorderreducer";

const FinalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  createorderReducer: createorderReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const current_user = localStorage.getItem("current_user")
  ? JSON.parse(localStorage.getItem("current_user"))
  : null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    current_user: current_user,
  },
};
const composeEnhnacers = composeWithDevTools({});
const store = createStore(
  FinalReducer,
  initialState,
  composeEnhnacers(applyMiddleware(thunk))
);

export default store;
