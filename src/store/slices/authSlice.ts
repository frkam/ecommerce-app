import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { signUp } from "services/firebase";

import { ISignUp, IAuth } from "types/auth.types";

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async (user: ISignUp) => {
    return await signUp(user);
  }
);

export interface AuthState {
  currentUser?: IAuth;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
