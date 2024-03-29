import { createSlice } from "@reduxjs/toolkit"


const basketSlice = createSlice({
    name: 'Basket',
    initialState: {
        totalPrice: localStorage.getItem('totalPrice') || 0,
        list: JSON.parse(localStorage.getItem('Basket')) || []
    },
    reducers: {
        addToBasket: (state, action) => {
            const findItem = state.list.find((obj) => obj.id == action.payload.id)

            if(findItem){
                findItem.count++
            }else{
                state.list.push({...action.payload, count: 1,});
            }


            
            state.totalPrice = state.list.reduce((sum, obj)=>{
                return obj.price + sum;
            }, 0);

            localStorage.setItem('Basket', JSON.stringify(state.list))
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        },
        
        itemMinus: (state, action)=>{
            const findItem = state.list.find((obj) => obj.id == action.payload.id)

            if(findItem){
                findItem.count--
            }
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

export const { addToBasket, removeToBasket, itemMinus } = basketSlice.actions
export const selectTotalPrice = (state) => state.basketSlice.totalPrice

export default basketSlice.reducer