import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_FEATURES } from "../../utils/contants";
import { CONTEST } from "../../utils/contestants";

const initialState = {
  features: INITIAL_FEATURES,
  features: INITIAL_FEATURE
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
