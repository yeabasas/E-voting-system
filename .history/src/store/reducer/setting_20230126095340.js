import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_FEATURES } from "../../utils/contants";
import { CONTESTANT_DATA } from "../../utils/contestants";

const initialState = {
  features: INITIAL_FEATURES,
};
const contestantData = {
  features: CONTESTANT_DATA,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
