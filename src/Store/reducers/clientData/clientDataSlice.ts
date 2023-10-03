import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TClientUserDataSchemaResponse } from "@response/ClientUserDataResponse";

type InitialState = {
  client: TClientUserDataSchemaResponse;
};

const initialState: InitialState = {
  client: {
    id_user: "",
    email: "",
    gender: 1,
    name: "",
    createdDate: new Date(),
    cellPhone: "",
    dateOfBirth: null,
    inactiveDate: null,
    active: true,
    address: {
      id_user: "",
      cep: "",
      streeth: "",
      city: "",
      state: "",
      country: ""
    }
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
