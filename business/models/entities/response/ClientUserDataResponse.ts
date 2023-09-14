import * as superstruct from "superstruct";

export const ClientAddressResponse = superstruct.object({
  id_user: superstruct.string(),
  cep: superstruct.string(),
  streeth: superstruct.string(),
  city: superstruct.string(),
  state: superstruct.string(),
  country: superstruct.string(),
});
export const ClientUserData = superstruct.object({
  address: ClientAddressResponse,
  id_user: superstruct.string(),
  userName: superstruct.string(),
  createdDate: superstruct.date(),
  cellPhone: superstruct.string(),
  active: superstruct.boolean(),
  initialAction: superstruct.date(),
  finishAction: superstruct.date(),
});

export type TClientUserDataSchemaResponse = superstruct.Infer<typeof ClientUserData>;
