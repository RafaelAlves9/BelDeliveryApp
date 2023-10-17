import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRestaurantDataSchemaResponse } from "@response/RestaurantResponse";

type InitialState = {
  restaurant: TRestaurantDataSchemaResponse;
};

const initialState: InitialState = {
  restaurant: {
    id_user: "",
    restaurantName: "",
    createdDate: new Date(),
    cellPhone: "",
    initialAction: new Date(),
    finishAction: new Date(),
    active: true,
  },
};

const restaurantDataSlice = createSlice({
  name: "restaurantDataSlice",
  initialState,
  reducers: {
    setRestaurantData(state, { payload }: PayloadAction<TRestaurantDataSchemaResponse>) {
      state.restaurant = payload;
    },
  },
});

export const { setRestaurantData } = restaurantDataSlice.actions;
export default restaurantDataSlice.reducer;
