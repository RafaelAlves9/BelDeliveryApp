import { TClientUserDataSchemaResponse } from "../../models/entities/response/ClientUserDataResponse";

export interface IClientInterface {
    getClient(id: string): Promise<TClientUserDataSchemaResponse>;
};
