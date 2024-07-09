import { configureStore } from '@reduxjs/toolkit'
import appslice from './appslice';
import chatReducer from "./chatSlice";



const store=configureStore({
  reducer: {
    // Define your reducers here
    app:appslice,
    chat:chatReducer

  },
 
})



export default store;