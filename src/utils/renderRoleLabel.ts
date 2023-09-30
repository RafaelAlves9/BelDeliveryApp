import { ERoles } from "@enums/ERoles";
import { EPerfilOption } from "@enums/EPerfilOption";

export const renderRoleLabel = (role: ERoles): string => {
  switch (role){
    case 1:
      return "client";
    case 2:
      return "restaurant";
    case 3:
      return "manager";
    default:
      return "client";
  };
};

export const renderPerfilOptionLabel = (option: EPerfilOption): string => {
  switch (option){
    case 1:
      return "Dados Pessoais";
    case 2:
      return "Endereços Cadastrados";
    default:
      return "Dados Pessoais";
  };
};
  