import { createSlice } from "@reduxjs/toolkit"


const basketSlice = createSlice({
    name: 'Basket',
    initialState: {
        totalPrice: localStorage.getItem('totalPrice') || 0,
        list: JSON.parse(localStorage.getItem('Basket')) || []
    },
    reducers: {
        addToBasket: (state, action) => {
            // const findItem = state.list.find((obj) => obj.id == action.payload.id)
            state.list.push(action.payload);
            state.totalPrice = state.list.reduce((sum, obj)=>{
                return obj.price + sum;
            }, 0);

            localStorage.setItem('Basket', JSON.stringify(state.list))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        },
        
        removeToBasket: (state, action) => {
            const removedProduct = state.list.find(product => product.id === action.payload);

            state.list = state.list.filter(product => product.id !== action.payload);
            state.totalPrice -= removedProduct.price;   

            localStorage.setItem('Basket', JSON.stringify(state.list))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        }
    }

})

export const { addToBasket, removeToBasket } = basketSlice.actions
export const selectTotalPrice = (state) => state.basketSlice.totalPrice

export default basketSlice.reducer