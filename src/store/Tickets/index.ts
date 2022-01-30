import { createSlice } from "@reduxjs/toolkit";
import tickets from "../../assets/data/tickets.json";

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: tickets,
  reducers: {},
});

export default ticketsSlice.reducer;
