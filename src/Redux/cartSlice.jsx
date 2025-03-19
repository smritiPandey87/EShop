import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPrice: 0,
    quantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const {user}= action.payload;
            const newItem = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === newItem.id);

            if (itemIndex !== -1) {
                
                state.products = state.products.map((item, index) => 
                    index === itemIndex
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                            totalPrice: item.totalPrice + newItem.price,
                          }
                        : item
                );
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                });
            }
            state.totalPrice += newItem.price;
            state.quantity += 1;
        },

     deleteFromCart(state,action){
        const id = action.payload
        const findItem = state.products.find((item)=>item.id===id)
        if(findItem){
            state.totalPrice -= findItem.totalPrice
            state.quantity -=findItem.quantity
            state.products = state.products.filter((val)=>val.id !== id)

        } 
        

     },
     increaseQuantity(state,action){
        const id = action.payload
        const findItem = state.products.find((val)=>val.id===id)
            if(findItem){
                findItem.quantity++
                findItem.totalPrice =+ findItem.price 
                 state.quantity++
                 state.totalPrice += findItem.price
            }
         
     },
     decreaseQuantity (state,action){
        const id =action.payload
        const findItem = state.products.find((val)=>val.id===id)
        if(findItem){
            if(findItem.quantity>0){
                findItem.quantity--
                findItem.totalPrice -= findItem.price
                state.quantity--
                state.price -= findItem.price
            }
            
            
        }
     }

    },
});

export const { addToCart,deleteFromCart, increaseQuantity,decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;