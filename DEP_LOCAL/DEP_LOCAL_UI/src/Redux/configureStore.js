import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    counter: counterSlice
  },
 
});

export default store;
