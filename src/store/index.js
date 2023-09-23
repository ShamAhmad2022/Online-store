import { combineReducers, createStore } from "redux"
import { reducer } from "./reducers/reducer";


const reducers = combineReducers({ reducer });

const store = () => {
    return createStore(reducers);
}

export default store();