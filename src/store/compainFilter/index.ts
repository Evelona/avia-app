import { createSlice } from "@reduxjs/toolkit";

export const compainFilterSlice = createSlice({
  name: "compainFilter",
  initialState: {
    compainFilter: "",
    transferFilter: "",
    mostFilter: "",
  },
  reducers: {
    setcompainFilterValue: (state, action) => {
      state.compainFilter = action.payload;
    },
  },
});

export const { setcompainFilterValue } = compainFilterSlice.actions;

export default compainFilterSlice.reducer;
