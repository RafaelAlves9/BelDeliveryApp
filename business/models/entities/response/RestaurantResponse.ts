import * as superstruct from "superstruct";

export const RestaurantDataResponse = superstruct.object({
  id_user: superstruct.string(),
  name: superstruct.string(),
  cellPhone: superstruct.string(),
  createdDate: superstruct.date(),
  active: superstruct.boolean(),
  image: superstruct.string(),
  category: superstruct.string(),
  deliveryTimeMin: superstruct.number(),
  deliveryTimeMax: superstruct.number(),
  deliveryValue: superstruct.number(),
});

export type TRestaurantDataSchemaResponse = superstruct.Infer<typeof RestaurantDataResponse>;
