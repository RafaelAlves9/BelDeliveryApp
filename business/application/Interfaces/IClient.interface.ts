import { TAddressUserSchema, TRegisterUserSchema } from "../../models/entities/request/UserSchema";

export interface IClientInterface {
    registerUser(user: TRegisterUserSchema): Promise<boolean>;
    addressUser(address: TAddressUserSchema): Promise<boolean>;
};
