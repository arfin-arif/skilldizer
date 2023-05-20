import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  showProfileOptions: false,
  showSettingOptions: false,
  selectedIndex: 2,
};

const settingsReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleProfileOptions: (state) => {
      state.showProfileOptions = !state.showProfileOptions;
    },
    toggleSettingOptions: (state) => {
      state.showSettingOptions = !state.showSettingOptions;
    },
    setSelectedIndex: (state, { payload }) => {
      state.selectedIndex = payload;
    }
  },
});

export const {
  toggleProfileOptions,
  toggleSettingOptions,
  setSelectedIndex,
} = settingsReducer.actions;

export default settingsReducer.reducer;
