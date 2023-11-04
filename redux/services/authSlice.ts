"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type SuccessToken = {
  token: string;
};

const initialState = {
  token: "",
} as SuccessToken;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegisterToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("stacksToken", action.payload, { secure: false });
    },
    setLoginToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("stacksToken", action.payload, { secure: false });
    },
    removeToken: (state) => {
      state.token = "";
      Cookies.remove("stacksToken");
    },
  },
});

export const { setRegisterToken, setLoginToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
