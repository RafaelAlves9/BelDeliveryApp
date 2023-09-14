import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isModalOrderOpen: boolean;
};

const initialState: InitialState = {
  isModalOrderOpen: false,
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setIsModalOrderOpen(state, { payload }: PayloadAction<boolean>) {
      state.isModalOrderOpen = payload;
    },
  },
});

export const { setIsModalOrderOpen } = orderSlice.actions;
export default orderSlice.reducer;
