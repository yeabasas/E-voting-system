import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});

export const {} = userSlice.actions;

export default userSlice.reducer;
