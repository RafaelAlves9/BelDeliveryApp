import { ERoles } from "@enums/ERoles";

export interface IAuthenticationInterface {
    loginWithGoogle(role: ERoles): Promise<boolean>;
    loginWithEmailAndPassword(email: string, password: string, role: ERoles): Promise<boolean>;
    checkUserExist(idUSer: string): Promise<boolean>;
};