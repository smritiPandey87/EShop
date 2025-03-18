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
            const newItem = action.payload;
            const itemIndex = state.products.findIndex((item) => item.id === newItem.id);

            if (itemIndex !== -1) {
                // Instead of mutating state directly, create a new array
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
        

     }
    },
});

export const { addToCart,deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;