import * as superstruct from "superstruct";
import { AddressResponse } from "./AddressResponse";

export const ClientProfileResponse = superstruct.object({
  companyName: superstruct.string(),
  nameEstablishment: superstruct.string(),
  administratorFullName: superstruct.string(),
  documentNumber: superstruct.string(),
  address: AddressResponse,
  loginEmail: superstruct.string(),
  emailReserved: superstruct.string(),
  phone: superstruct.string(),
  cellPhone: superstruct.string(),
  activeDate: superstruct.string(),
  isActive: superstruct.boolean(),
});

export type TClientProfileSchemaResponse = superstruct.Infer<typeof ClientProfileResponse>;