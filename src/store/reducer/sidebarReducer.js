import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isOpenSidebar: false,
};

const sidebarReducer = createSlice({
  name: "isOpenSidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpenSidebar = true;
    },
    closeSidebar: (state) => {
      state.isOpenSidebar = false;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarReducer.actions;

export default sidebarReducer.reducer;
