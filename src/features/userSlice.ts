import { createSlice } from "@reduxjs/toolkit";
import store from "../app/store";
import { User } from "firebase/auth/cordova";

type StateType = {
  user: null | User;
};
const initialState: StateType = {
  user: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
