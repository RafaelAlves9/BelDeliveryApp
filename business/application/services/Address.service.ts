// import { IClientInterface } from "../Interfaces/IClient.interface";
// import { db } from "../../../config/firebase/firebaseConfig";
// import { getDocs, collection, query, where } from 'firebase/firestore';
import { addDoc, collection } from "firebase/firestore";
import { TAddressRegisterSchema } from "../../models/entities/request/AddressSchemaRequest";
import { TAddressSchemaResponse, TCepApiSchemaResponse } from "../../models/entities/response/AddressSchemaResponse";
import { IAddressInterface } from "../Interfaces/IAddress.interface";
import { instances } from "@config/axios/axios.instances";
import { db } from "@config/firebase/firebaseConfig";

export class AddressService implements IAddressInterface {
    async getAddressById(id: string): Promise<TAddressSchemaResponse> {
        if(id){
            
        }
        throw new Error("Method not implemented.");
    };
    async getCep(cep: string): Promise<TCepApiSchemaResponse> {
        try{
            const result = await instances.public.get(`https://viacep.com.br/ws/${cep}/json/`);
            
            return result.data;
        }
        catch(error: any){
            return error;
        };
    };
    async updateAddress(data: TAddressRegisterSchema): Promise<boolean> {
        if(data){
            
        }
        throw new Error("Method not implemented.");
    };
    async postAddress(address: TAddressRegisterSchema): Promise<boolean> {
        const addressRef = collection(db, "client", address.id_user, "address");
        const resultAddress = await addDoc(addressRef, address);

        if(!!resultAddress.id){
            return true;
        };

        return false
    };
};
