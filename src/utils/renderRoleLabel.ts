import { ERoles } from "@enums/ERoles";

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
  