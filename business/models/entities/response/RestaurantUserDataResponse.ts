import * as superstruct from "superstruct";
import { AddressResponse } from "./AddressResponse";

export const RestaurantDataResponse = superstruct.object({
  id_user: superstruct.string(),
  restaurantName: superstruct.string(),
  createdDate: superstruct.date(),
  cellPhone: superstruct.string(),
  active: superstruct.boolean(),
  initialAction: superstruct.date(),
  finishAction: superstruct.date(),
  address: AddressResponse,
});

export type TRestaurantDataSchemaResponse = superstruct.Infer<typeof RestaurantDataResponse>;
