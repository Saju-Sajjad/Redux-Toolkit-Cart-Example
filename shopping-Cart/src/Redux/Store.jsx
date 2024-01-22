import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './feature/CartSlice'
export const Store = configureStore({
    reducer:{
      carts:rootReducer
    }
})