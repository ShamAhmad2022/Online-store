import { actionTypes } from "./actionTypes"

export const setProducts = (products) => {
    return { type: actionTypes.SET_PRODUCTS, payload: products }
}

export const setCategory = (categories) => {
    return { type: actionTypes.SET_CATEGORY, payload: categories } 
}

export const setActiveCategory = (category) => {
    return { type: actionTypes.SET_ACTIVECATEGORY, payload: category }
}

export const addToCart = (item) => {
    return { type: actionTypes.ADD_TO_CART, payload: item }
}

export const deleteFromCart = (id) => {
    return { type: actionTypes.DELETE_FROM_CART, payload: id }
}