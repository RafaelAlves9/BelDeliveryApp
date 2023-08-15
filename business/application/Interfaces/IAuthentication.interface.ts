import { TRegisterUserSchema } from "../../models/entities/request/UserSchema";

export interface IAuthenticationInterface {
    loginWithGoogle(): Promise<boolean>;
    loginWithEmailAndPassword(email: string, password: string): Promise<boolean>;
    checkUserExist(idUSer: string): Promise<boolean>;
};