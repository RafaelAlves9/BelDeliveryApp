import { TRegisterUserSchema } from "@request/UserSchema";
import { TRole } from "../../models/types/TRole";

export interface IAuthenticationInterface {
    loginWithGoogle(role: TRole): Promise<boolean>;
    loginWithEmailAndPassword(email: string, password: string, role: TRole): Promise<boolean>;
    checkUserExist(idUSer: string, type: string): Promise<boolean>;
    registerClientProfile(user: TRegisterUserSchema): Promise<boolean>;
};