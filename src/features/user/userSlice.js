import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    deleteUser: (state, action) =>
      state.filter((user) => user.id !== action.payload.id),
    updateUser: (state, action) => {
      state[state.findIndex((user) => user.id === action.payload.id)].userName =
        action.payload.newUserName;
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
