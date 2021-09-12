import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import auth from "./reducers/auth";
import users from "./reducers/users";
import thunk from "redux-thunk";

const reducer = combineReducers({
    auth,
    users,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));