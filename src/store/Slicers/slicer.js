import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    products: [],
    category: [],
    activeCategory: '',
    cart: [],
    clickedItems: {}
}

const slicer = createSlice({
    name:'proucts',
    initialState,
    reducers:{
        setProducts: (state, action)=>{
            state.products= action.payload;
        },
        setCategory: (state, action)=>{
            state.category= action.payload;
        },
        setActiveCategory: (state, action)=>{
            state.activeCategory= action.payload;
        },
        addToCart: (state, action)=>{
            state.cart= [...state.cart, action.payload];
        },
        toggleIsClicked: (state, action)=>{
            state.clickedItems= {
                ...state.clickedItems,
                [action.payload]: !state.clickedItems[action.payload]
            }
        },
        deleteFromCart: (state, action)=>{
            state.cart= state.cart.filter(item => item.id!==action.payload);
        }
    }
});

export const {setProducts, setCategory, setActiveCategory, addToCart, toggleIsClicked, deleteFromCart} = slicer.actions;

export default slicer.reducer;