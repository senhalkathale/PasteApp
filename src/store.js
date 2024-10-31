import { configureStore } from '@reduxjs/toolkit'
import  pasteReducer from './redux/pasteSlice'

export const store= configureStore({
  reducer: {
    paste : pasteReducer,
  },
})

//steps
//create store 
// wrap app component under provider
// create slice 
// register rducer in store 