import { createSlice } from "@reduxjs/toolkit";
import segments from "../../assets/data/segments.json";

export const segmentsSlice = createSlice({
  name: "segmets",
  initialState: segments,
  reducers: {},
});

export default segmentsSlice.reducer;
