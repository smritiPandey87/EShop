import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice.jsx"
import authSlice from "./authSlice.jsx"

 const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth:  authSlice
    }
})

export default store