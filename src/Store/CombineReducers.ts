import { combineReducers } from "@reduxjs/toolkit";
import * as Reducers from "./reducers/imports";

export const rootReducer = combineReducers({
  loading: Reducers.loadingSlice,
  sideBar: Reducers.sideBarSlice,
  cartBar: Reducers.cartBarSlice,
  clientData: Reducers.clientDataSlice,
  restaurantData: Reducers.restaurantDataSlice,
  orders: Reducers.orderSlice,
  perfil: Reducers.perfilSlice,
});
