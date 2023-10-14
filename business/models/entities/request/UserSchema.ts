import * as superstruct from "superstruct";

export const RegisterUser = superstruct.object({
  email: superstruct.string(),
  userName: superstruct.string(),
  cellPhone: superstruct.nullable(superstruct.string()),
  id_user: superstruct.string(),
  isActive: superstruct.boolean(),
  createdDate: superstruct.date(),
  uid: superstruct.string(),
});

export const AddressUser = superstruct.object({
  userName: superstruct.string(),
  cellPhone: superstruct.nullable(superstruct.string()),
  id_user: superstruct.string(),
  isActive: superstruct.boolean(),
  createdDate: superstruct.date(),
});

export type TRegisterUserSchema = superstruct.Infer<typeof RegisterUser>;
export type TAddressUserSchema = superstruct.Infer<typeof AddressUser>;