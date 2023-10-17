import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TClientUserDataSchemaResponse } from "@response/ClientResponse";

type InitialState = {
  client: TClientUserDataSchemaResponse;
};

const initialState: InitialState = {
  client: {
    id_user: "",
    email: "",
    gender: "",
    userName: "",
    createdDate: new Date(),
    cellPhone: "",
    dateOfBirth: null,
    inactiveDate: null,
    isActive: true,
  },
};

const clientDataSlice = createSlice({
  name: "clientDataSlice",
  initialState,
  reducers: {
    setClientData(state, { payload }: PayloadAction<TClientUserDataSchemaResponse>) {
      state.client = payload;
    },
  },
});

export const { setClientData } = clientDataSlice.actions;
export default clientDataSlice.reducer;
