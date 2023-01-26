import { configureStore } from "@reduxjs/toolkit";
import user from "./reducer/user";
import setting from "./reducer/setting";
import contestant from "./reducer/contestant";
export const store = configureStore({
  reducer: {
    user,
    setting,
    contestant,
  },
});
