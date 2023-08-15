
export interface IAuthenticationInterface {
    loginWithGoogle(role: "restaurant" | "client"): Promise<boolean>;
    loginWithEmailAndPassword(email: string, password: string, role: "resaurant" | "client"): Promise<boolean>;
    checkUserExist(idUSer: string, type: string): Promise<boolean>;
};