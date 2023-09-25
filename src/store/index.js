import { applyMiddleware, combineReducers, createStore } from "redux"
import { reducer } from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const reducers = combineReducers({ reducer });

const store = () => {
    // return createStore(reducers, applyMiddleware(thunk), composeWithDevTools());
    return createStore(reducers, applyMiddleware(thunk));
}

export default store();