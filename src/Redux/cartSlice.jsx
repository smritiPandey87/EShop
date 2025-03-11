import{createSlice} from "@reduxjs/toolkit"

const initialState = {
    products:[],
    totalPrice:0,
    quantity:0,

}
const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
         addToCart(state,action){
            const newItem = action.payload
            const itemIndex = state.products.find((item)=>item.id===newItem.id)
            if(itemIndex){
                itemIndex.quantity++
                itemIndex.totalPrice+=newItem.totalPrice
            }
            else{
                state.products.push({
                    id: newItem.id,
                     name:newItem.name, 
                     price: newItem.price,
                     quantity: 1,
                     totalPrice:newItem.price,
                     image:newItem.image

                    
                })
            }
            state.totalPrice+= newItem.price
            state.totalquantity++
         }
    }

    
})

export const {addToCart} =createSlice.actions

export default cartSlice.reducer