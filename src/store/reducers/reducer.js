import { actionTypes } from "./actionTypes";

//create initial values
export const initialState = {
    products: [],
    category: [],
    activeCategory: '',
    cart: [],
    clickedItems: {}
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
        case actionTypes.ADD_TO_CART :
            return {
                ...state, cart: [...state.cart, payload]
            }
        case actionTypes.DELETE_FROM_CART :
            return {
                ...state, cart: state.cart.filter(item => item.id!==payload)
            }
        case actionTypes.TOGGLE_IS_CLICKED:
            return {
                ...state,
                clickedItems: {
                ...state.clickedItems,
                [payload]: !state.clickedItems[payload], // Toggle the clicked state for the given item ID
                },
            };
    
        default: return state;
    }
}
