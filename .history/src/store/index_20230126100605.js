import { configureStore } from "@reduxjs/toolkit";
import user from "./reducer/user";
import setting from "./reducer/setting";

export const store = configureStore({
  reducer: {
    user,
    setting,
    contestanst,
  },
});
