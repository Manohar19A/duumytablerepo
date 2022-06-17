import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    isLoggedIn: false,
    test: ["Felix", "Albert"]
  },
  reducers: {
    increment: (state) => {
      console.log(state.test);
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});
const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions;

export default reducer;
