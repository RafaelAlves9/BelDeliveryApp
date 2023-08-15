import * as superstruct from "superstruct";

export const AddressResponse = superstruct.object({
  addressId: superstruct.number(),
  street: superstruct.string(),
  zipCode: superstruct.string(),
  state: superstruct.string(),
  city: superstruct.string(),
  district: superstruct.string(),
  country: superstruct.string(),
  number: superstruct.string(),
  complement: superstruct.string(),
});

export type TAddressSchemaResponse = superstruct.Infer<typeof AddressResponse>;