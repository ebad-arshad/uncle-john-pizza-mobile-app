import userStore from "./user";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userStore,
  },
});

export default store;