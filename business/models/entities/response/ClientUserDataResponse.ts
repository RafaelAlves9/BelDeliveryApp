import * as superstruct from "superstruct";
import { AddressResponse } from "./AddressResponse";

export const ClientUserData = superstruct.object({
  id_user: superstruct.string(),
  userName: superstruct.string(),
  createdDate: superstruct.date(),
  cellPhone: superstruct.string(),
  active: superstruct.boolean(),
  initialAction: superstruct.date(),
  finishAction: superstruct.date(),
  address: AddressResponse,
});

export type TClientUserDataSchemaResponse = superstruct.Infer<typeof ClientUserData>;
