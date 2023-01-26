import { createSlice } from "@reduxjs/toolkit";
import { OUTCOME } from "../../utils/outcome";

const initialState = {
  features: OUTCOME,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
