import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./tickets";
import segmentsReducer from "./segments";
import compainsReducer from "./compains";
import filterReducer from "./filters";

export default configureStore({
  reducer: {
    tickets: ticketsReducer,
    segments: segmentsReducer,
    compains: compainsReducer,
    filters: filterReducer,
  },
});
