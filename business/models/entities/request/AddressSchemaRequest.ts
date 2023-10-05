import * as superstruct from "superstruct";

export const Address = superstruct.object({
  id: superstruct.string(),
  id_user: superstruct.string(),
  createdDate: superstruct.date(),
  cep: superstruct.string(),
  streeth: superstruct.string(),
  number: superstruct.number(),
  city: superstruct.string(),
  state: superstruct.string(),
  country: superstruct.string(),
  complement: superstruct.string()
});

export type TAddressRegisterSchema = superstruct.Infer<typeof Address>;
export type TAddressUpdateSchema = superstruct.Infer<typeof Address>;