import * as superstruct from "superstruct";

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
});

export type TClientUserDataSchemaResponse = superstruct.Infer<typeof ClientUserData>;
