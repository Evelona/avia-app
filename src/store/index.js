import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./tickets";
import segmentsReducer from "./segments";
import compainsReducer from "./compains";
import compainFilterReducer from "./compainFilter";

export default configureStore({
  reducer: {
    tickets: ticketsReducer,
    segments: segmentsReducer,
    compains: compainsReducer,
    filters: compainFilterReducer,
  },
});
