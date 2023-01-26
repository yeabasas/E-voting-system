import { createSlice } from "@reduxjs/toolkit";
import { CONTESTANT_DATA } from "../../utils/contestants";


const contestantData = {
  features: CONTESTANT_DATA,
};

export const contestantSlice = createSlice({
  name: "contestant",
  contestantData,
});

export const {} = contestantSlice.actions;

export default settingSlice.reducer;
