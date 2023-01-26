import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_FEATURES } from "../../utils/contants";
import { INITIAL_FEATURE } from "../../utils/co";

const initialState = {
  features: INITIAL_FEATURES,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
