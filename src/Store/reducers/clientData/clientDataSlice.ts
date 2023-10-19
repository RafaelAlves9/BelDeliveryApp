import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAddressSchemaResponse } from "@response/AddressSchemaResponse";
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
    address: {
      cep: "",
      city: "",
      complement: "",
      country: "",
      id_user: "",
      number: "",
      state: "",
      streeth: ""
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
    setAddressData(state, { payload }: PayloadAction<TAddressSchemaResponse>) {
      state.client.address = payload;
    },
  },
});

export const { setClientData, setAddressData } = clientDataSlice.actions;
export default clientDataSlice.reducer;
