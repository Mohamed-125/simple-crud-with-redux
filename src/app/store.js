import { configureStore } from "@reduxjs/toolkit";
import userReudcer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReudcer
  }
});
