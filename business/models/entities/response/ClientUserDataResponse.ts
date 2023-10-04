import * as superstruct from "superstruct";

export const ClientAddressResponse = superstruct.object({
  id_user: superstruct.string(),
  cep: superstruct.string(),
  streeth: superstruct.string(),
  number: superstruct.number(),
  city: superstruct.string(),
  state: superstruct.string(),
  country: superstruct.string(),
  complement: superstruct.string(),
});
export const ClientUserData = superstruct.object({
  id_user: superstruct.string(),
  name: superstruct.string(),
  email: superstruct.string(),
  gender: superstruct.string(),
  cellPhone: superstruct.string(),
  dateOfBirth: superstruct.nullable(superstruct.date()),
  active: superstruct.boolean(),
  createdDate: superstruct.date(),
  inactiveDate: superstruct.nullable(superstruct.date()),
  address: ClientAddressResponse,
});

export type TClientUserDataSchemaResponse = superstruct.Infer<typeof ClientUserData>;
