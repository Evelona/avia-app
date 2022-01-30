import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "../store/Tickets";

export default configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});
