import { createSlice } from "@reduxjs/toolkit";
import { CONTESTANT_DATA } from "../../utils/contestants";


const contestantData = {
  features: CONTESTANT_DATA,
};

export const conSlice = createSlice({
  name: "contestant",
  contestantData,
});

export const {} = settingSlice.actions;

export default settingSlice.reducer;
