import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appMenu",
  initialState: { isMenuDisplay: true },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuDisplay = !state.isMenuDisplay;
    },
    closeMenu: (state) => {
      state.isMenuDisplay = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
