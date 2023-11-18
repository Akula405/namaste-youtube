import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const appStore = configureStore({
  reducer: {
    appMenu: appSlice,
  },
});

export default appStore;
