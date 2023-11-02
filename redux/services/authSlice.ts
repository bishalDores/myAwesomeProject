import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    },
    setLoginToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setRegisterToken, setLoginToken } = authSlice.actions;
export default authSlice.reducer;
