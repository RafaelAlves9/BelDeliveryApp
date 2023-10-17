import { TRegisterUserSchema } from "@request/UserSchema";
import { TClientUserDataSchemaResponse } from "../../models/entities/response/ClientResponse";

export interface IClientInterface {
    getClient(id: string): Promise<TClientUserDataSchemaResponse>;
    registerClientProfile(user: TRegisterUserSchema): Promise<boolean>;
    updateClientProfile(user: TRegisterUserSchema): Promise<boolean>;
};
