// import { IClientInterface } from "../Interfaces/IClient.interface";
// import { db } from "../../../config/firebase/firebaseConfig";
// import { getDocs, collection, query, where } from 'firebase/firestore';
import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { TAddressRegisterSchema } from "../../models/entities/request/AddressSchemaRequest";
import { TAddressSchemaResponse, TCepApiSchemaResponse } from "../../models/entities/response/AddressSchemaResponse";
import { IAddressInterface } from "../Interfaces/IAddress.interface";
import { instances } from "@config/axios/axios.instances";
import { db } from "@config/firebase/firebaseConfig";
import { Base } from "./Base.service";

export class AddressService extends Base implements IAddressInterface {
    async getAddressByIdUser(id: string): Promise<TAddressSchemaResponse> {
        try{
            const queryDoc = query(collection(db, "address"), where("id_user", "==", id));
            const address = await getDocs(queryDoc);
            console.log("address", address);
           
            if(!address.empty){
                const addressData = address.docs[0].data() as TAddressSchemaResponse;
                return addressData;
            } else {
                throw null;
            };
        } catch (error){
            throw error;
        };
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
    async updateAddress(address: TAddressRegisterSchema): Promise<boolean> {
        const addressRef = collection(db, "address");
        const q = query(addressRef, where("id_user", "==", address.id_user));
        console.log(address);
        try{
            const querySnapshot = await getDocs(q);
            if(!querySnapshot.empty){
                const AddressDoc = querySnapshot.docs[0];
                await updateDoc(AddressDoc.ref, address);
                this.message("Endereço editado com sucesso ", "success");
                return true;
            };
            this.message("Erro ao editar endereço", "error");
            return false;
        }
        catch(error){
            this.message("Erro ao editar endereço", "error");
            return false;
        };
    };
    async postAddress(address: TAddressRegisterSchema): Promise<boolean> {
        try{
            const addressRef = collection(db, "address");
            const resultAddress = await addDoc(addressRef, address);

            if(!!resultAddress.id){
                this.message("Endereço cadastrado com sucesso ", "success");
                return true;
            };
            return false;
        }
        catch(error){
            this.message("Erro ao cadastrar endereço", "error");
            return false;
        };
    };
};
