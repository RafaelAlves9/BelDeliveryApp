import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TClientUserDataSchemaResponse } from "@response/ClientUserDataResponse";

type InitialState = {
  client: TClientUserDataSchemaResponse;
};

const initialState: InitialState = {
  client: {
    id_user: "",
    userName: "",
    createdDate: new Date(),
    cellPhone: "",
    initialAction: new Date(),
    finishAction: new Date(),
    active: true,
    address: {
      id_user: "",
      cep: "",
      streeth: "",
      district: "",
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