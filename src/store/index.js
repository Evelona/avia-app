import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./tickets";
import segmentsReducer from "./segments";
import compainsReducer from "./compains";

export default configureStore({
  reducer: {
    tickets: ticketsReducer,
    segments: segmentsReducer,
    compains: compainsReducer,
  },
});
