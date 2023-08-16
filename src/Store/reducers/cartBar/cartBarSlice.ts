import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isOpenCartBar: boolean;
};

const initialState: InitialState = {
  isOpenCartBar: false,
};

const cartBarSlice = createSlice({
  name: "cartBarSlice",
  initialState,
  reducers: {
    setOpenCartBar(state, { payload }: PayloadAction<boolean>) {
      state.isOpenCartBar = payload;
    },
  },
});

export const { setOpenCartBar } = cartBarSlice.actions;
export default cartBarSlice.reducer;
