import { createSlice } from "@reduxjs/toolkit";
import { OUTCOME } from "../../utils/contestants";

const initialState = {
  features: CONTESTANT_DATA,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
