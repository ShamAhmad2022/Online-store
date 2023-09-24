import { combineReducers, createStore } from "redux"
import { reducer } from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";


const reducers = combineReducers({ reducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();