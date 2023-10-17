import * as superstruct from "superstruct";

export const RegisterUser = superstruct.object({
  email: superstruct.string(),
  userName: superstruct.string(),
  cellPhone: superstruct.nullable(superstruct.string()),
  id_user: superstruct.string(),
  isActive: superstruct.boolean(),
  createdDate: superstruct.date(),
  gender: superstruct.string(),
  dateOfBirth: superstruct.nullable(superstruct.date()),
  inactiveDate: superstruct.nullable(superstruct.date()),
});

export type TRegisterUserSchema = superstruct.Infer<typeof RegisterUser>;