import { EPerfilOption } from "@enums/EPerfilOption";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  perfilSection: EPerfilOption;
};

const initialState: InitialState = {
  perfilSection: EPerfilOption.Personal,
};

const perfilSlice = createSlice({
  name: "perfilSlice",
  initialState,
  reducers: {
    setPerfilSection(state, { payload }: PayloadAction<EPerfilOption>) {
      state.perfilSection = payload;
    },
  },
});

export const { setPerfilSection } = perfilSlice.actions;
export default perfilSlice.reducer;
