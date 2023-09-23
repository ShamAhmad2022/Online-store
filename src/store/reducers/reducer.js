import { actionTypes } from "./actionTypes";

//create initial values
export const initialState = {
    products: [],
    category: [],
    activeCategory : ''
}

//then the reducers
export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case actionTypes.SET_PRODUCTS :
            return {
                ...state, products: payload
            }
        case actionTypes.SET_CATEGORY :
            return {
                ...state, category: payload
            }
    
        case actionTypes.SET_ACTIVECATEGORY :
            return {
                ...state, activeCategory: payload
            }
    
        default: return state;
    }
}

export const setProducts = (products) => {
    return { type: actionTypes.SET_PRODUCTS, payload: products }
}

export const setCategory = (categories) => {
    return { type: actionTypes.SET_CATEGORY, payload: categories } 
}

export const setActiveCategory = (category) => {
    return { type: actionTypes.SET_ACTIVECATEGORY, payload: category }
}