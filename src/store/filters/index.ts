import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  compainFilter: string;
  transferFilter: number[];
  mostFilter: string;
} = {
  compainFilter: "",
  transferFilter: [],
  mostFilter: "",
};

export const compainFilterSlice = createSlice({
  name: "compainFilter",
  initialState: initialState,
  reducers: {
    setCompainFilterValue: (state, action) => {
      state.compainFilter = action.payload;
    },
    addTransferFilterValue: (state, action: PayloadAction<number>) => {
      state.transferFilter.push(action.payload);
    },
    removeTransferFilterValue: (state, action) => {
      state.transferFilter = state.transferFilter.filter(
        (value) => value !== action.payload
      );
    },
    setMostFilterValue: (state, action) => {
      state.mostFilter = action.payload;
    },
  },
});

export const {
  setCompainFilterValue,
  addTransferFilterValue,
  removeTransferFilterValue,
  setMostFilterValue,
} = compainFilterSlice.actions;

export default compainFilterSlice.reducer;
