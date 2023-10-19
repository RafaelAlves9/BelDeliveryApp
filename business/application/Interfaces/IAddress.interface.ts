import { TAddressRegisterSchema } from "../../models/entities/request/AddressSchemaRequest";
import { TAddressSchemaResponse, TCepApiSchemaResponse } from "../../models/entities/response/AddressSchemaResponse";

export interface IAddressInterface {
    getAddressByIdUser(id: string): Promise<TAddressSchemaResponse>;
    getCep(cep: string): Promise<TCepApiSchemaResponse>;
    postAddress(data: TAddressRegisterSchema): Promise<boolean>;
    updateAddress(data: TAddressRegisterSchema): Promise<boolean>;
};
