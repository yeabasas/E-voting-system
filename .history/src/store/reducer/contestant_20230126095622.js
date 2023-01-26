import { createSlice } from "@reduxjs/toolkit";
import { CONTESTANT_DATA } from "../../utils/contestants";


const contestantData = {
  features: CONTESTANT_DATA,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  contestantData,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
