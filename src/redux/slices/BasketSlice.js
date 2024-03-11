import { createSlice } from "@reduxjs/toolkit"


const basketSlice = createSlice({
    name: 'Basket',
    initialState: {
        totalPrice: localStorage.getItem('totalPrice') || 0,
        list: JSON.parse(localStorage.getItem('Basket')) || []
    },
    reducers: {
        addToBasket: (state, action) => {
            const { id, img, title, price, discount, count } = action.payload;
            const existingProductIndex = state.list.findIndex(product => product.id === id);
          
            if (existingProductIndex !== -1) {
              // Если товар уже есть в корзине, обновляем его количество
              state.list[existingProductIndex].count += count;
            } else {
              // Иначе добавляем новый товар в корзину
              state.list.push({ id, img, title, price, discount, count });
            }
          
            // Посчитаем общую стоимость корзины
            state.totalPrice = state.list.reduce((sum, product) => sum + product.price * product.count, 0);
          
            localStorage.setItem('Basket', JSON.stringify(state.list));
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
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