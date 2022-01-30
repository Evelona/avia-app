import { createSlice } from "@reduxjs/toolkit";
import compains from "../../assets/data/companies.json";

export const compainsSlice = createSlice({
  name: "companies",
  initialState: compains,
  reducers: {},
});

export default compainsSlice.reducer;
