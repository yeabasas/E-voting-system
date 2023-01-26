import { createSlice } from "@reduxjs/toolkit";
import { CONTESTANTS } from "../../utils/contants";

const initialState = {
  features: INITIAL_FEATURES,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
