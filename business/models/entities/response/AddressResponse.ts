import * as superstruct from "superstruct";

export const AddressResponse = superstruct.object({
  id_user: superstruct.string(),
  cep: superstruct.string(),
  streeth: superstruct.string(),
  number: superstruct.number(),
  city: superstruct.string(),
  state: superstruct.string(),
  country: superstruct.string(),
  complement: superstruct.string(),
});

export type TAddressSchemaResponse = superstruct.Infer<typeof AddressResponse>;
